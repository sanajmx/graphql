import { SkillsPieChart } from "@/components/ui/skillsPieChart";
import { ChartLineLinear } from "@/components/ui/chart-line-linear";
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive";
import { SkillTransaction, Progress, XPTransaction } from "@/models/interfaces";

interface ProfileChartsProps {
  skillData?: SkillTransaction[];
  chartData: { skill: string; level: number }[];
  progressChartData: { name: string; grade: number; type?: string }[];
  xpChartData: { project: string; xp: number }[]
}

export function ProfileCharts({
  skillData,
  chartData,
  progressChartData,
  xpChartData,
}: ProfileChartsProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {skillData && skillData.length > 0 ? (
            <SkillsPieChart data={chartData} />
          ) : (
            <div className="p-6">
              <p className="text-gray-500">No skills data available</p>
            </div>
          )}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <ChartAreaInteractive data={progressChartData} />
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <ChartLineLinear data={xpChartData} />
      </div>
    </>
  );
}
