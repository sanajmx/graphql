import { clearApolloCache } from "@/lib/apollo-client";
import { useUser, useProgress, useAudit, useSkills, useXP } from "@/hooks/useUserData";
import HeartIcon from "@/components/ui/heart-icon";
import {Button} from "@/components/ui/button"
import { useRouter } from "next/router";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { SkillsPieChart } from "@/components/ui/skillsPieChart"
import { ChartLineLinear } from "@/components/ui/chart-line-linear";
import {ChartAreaInteractive} from "@/components/ui/chart-area-interactive"
import { StatCard } from "@/components/ui/statCard";
import {Progress, User, AuditUser, SkillTransaction, XPTransaction} from "@/models/interfaces"
import { formatSkillData, formatXPData, formatProgressData } from "@/utils/dataTransform";
import { ProfileHeader } from "@/components/ui/profile/profileHeader";
import { ProfileInfo } from "@/components/ui/profile/profileInfo";
import { ProfileCharts } from "@/components/ui/profile/profileCharts";



export default function ProfilePage(){

    const {data, loading, error} = useUser();
    const user: User | undefined= data?.user?.[0];

    const {data: progressData} = useProgress(user?.id)
    const {data: auditData} = useAudit();

    const auditUser: AuditUser| undefined = auditData?.user?.[0];

    const {data: skillData} = useSkills();
    const {data: xpData} = useXP();

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    // const auditUser = auditData?.user?.[0];

    if (loading) return <p> Loading</p>;
    if (error) return <p>Error: {error.message}</p>
    if (!user) return <p>No user found!</p>

    const totalXP = xpData?.transaction?.reduce(
        (sum: number, tx: XPTransaction) => sum + tx.amount,
        0
    ) ?? 0;

    const totalLevel =
     progressData?.progress?.reduce(
     (sum: number, p: Progress) => sum + (p.grade ?? 0),
      0
     ) ?? 0;

    const levelAmount = data?.level?.[0]?.amount ?? 0;

    const chartData = formatSkillData(skillData?.transaction);


    const xpChartData = formatXPData(xpData?.transaction);


   const progressChartData = formatProgressData(progressData?.progress);

    const HandleSignout = async () => {
    localStorage.removeItem("authToken"); // Only remove the token, not everything
    
    await clearApolloCache();
    
    toast({
        title: "Signed out successfully",
        description: "Redirecting to homepage..."
    });
    
    router.push("/");
};

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
          

           <ProfileHeader onSignout={HandleSignout}/>

            <main className="pt-24 pb-16 px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
                        Welcome, {user.firstName} {user.lastName} 
                    </h1>
                    <p className="text-gray-500 text-lg">@{user.login}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                  <StatCard label="Total XP" value={totalXP.toLocaleString()} />
                  <StatCard label="Level" value={levelAmount} />
                  <StatCard label="Audit Ratio" value={auditUser?.auditRatio?.toFixed(2) ?? "N/A"} />
                  <StatCard label="Total Progress" value={totalLevel.toFixed(2)} />
                </div>


              

          <ProfileInfo auditUser={auditUser} user={user} />


          <ProfileCharts 
            skillData={skillData?.transaction}
            chartData={chartData}
            progressChartData={progressChartData}
            xpChartData={xpChartData}
          />

            </main>
        </div>
    );
}