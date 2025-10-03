import { clearApolloCache } from "@/lib/apollo-client";
import {useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input} from "@/components/ui/input"
import { Button} from "@/components/ui/button"
import { Loader2} from "lucide-react";
import HeartIcon from "@/components/ui/heart-icon";
import { toast } from "@/hooks/use-toast";
import { SaveToken, GetToken, ClearToken, IsTheTokenValid } from "@/components/ui/token";


export default function LoginPage(){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        
        const token = IsTheTokenValid();
        
        if (token) {
           // console.log("Already logged in - redirecting to profile");
            router.push("/profile");
        }
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {

        e.preventDefault(); 

       // console.log("username = ",username);        

        setLoading(true);
        const credentials = btoa(`${username}:${password}`) 
        
         try {
            const url = "https://learn.reboot01.com/api/auth/signin";

            const response = await fetch(url , {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${credentials}`, 
                    'Content-Type': 'application/json'
                }
            });


            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const token = await response.text();
            const cleanToken = token.replace(/^"|"$/g, '')

            //console.log("the token with quotes - that i am unable to read:", token)
            //console.log("token after i cleaned it and replaced quotation mark:", cleanToken)

 
            if (cleanToken) {
                // localStorage.setItem("authToken", cleanToken);

                SaveToken(cleanToken);
                
              const   storedToken = GetToken();
                console.log("=== Login Successful ===");
                console.log("Token stored:", !!storedToken);
                console.log("Token preview:", storedToken ? storedToken.substring(0, 20) + "..." : "null");

                
                toast({
                    title: "Login successful 🎀",
                    description: "Redirecting to your profile...",
                });

                router.push("/profile");
            } else {
              //  console.log("token not found");
            }
            

            //console.log("login worked");
        } catch(e) {
            ClearToken();


            await clearApolloCache();
            
            toast({
                title: "Login failed",
                description: "Invalid username or password. Please try again.",
                variant: "destructive",
            });

        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="min-h-screen font-sans bg-gray-50 relative">
      <header className="w-full flex items-center justify-start px-8 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-2">
          <HeartIcon width={32} height={32} />
          <h1 className="text-xl font-bold">GraphQL</h1>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen pt-28 space-y-4 px-4">
        <div className="w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl mb-4">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
        >
            <source src="/background2yayaya.mp4" type="video/mp4" />
        </video>

        </div>

      <h1 className="text-[30px] font-bold text-black dark:text-white text-center font-sans mt-8">
        Sign in with your Reboot Account!
      </h1>

        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <Loader2 className="h-12 w-12 animate-spin text-white" />
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4 p-6 rounded-xl shadow-md bg-white/80 dark:bg-black/40 backdrop-blur-md max-w-md w-full"
        >
          <Input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[52px] px-4 pt-4 pb-1 rounded-[12px] bg-white/80 dark:bg-black/20 border border-gray-400 dark:border-gray-600 text-black dark:text-white text-[17px] font-normal font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent box-border"
          />

          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[52px] px-4 pt-4 pb-1 rounded-[12px] bg-white/80 dark:bg-black/20 border border-gray-400 dark:border-gray-600 text-black dark:text-white text-[17px] font-normal font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent box-border"
          />

          <div className="flex justify-center ">
            <Button
              type="submit"
              className="bg-black text-white rounded-[22px] px-[30px] min-w-[146px] h-[44px] font-sans font-semibold text-[19px] leading-[20px] m-auto hover:bg-gray-800 transition-colors"
            >
              Sign In 🎀
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}