"use client";

import React, { useEffect } from "react";
import HeartIcon from "@/components/ui/heart-icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { GetToken, IsTheTokenValid } from "@/components/ui/token";

export default function Home() {

  const router = useRouter();

  

 useEffect(() => {
    const token = IsTheTokenValid();

    if (token) {
      console.log("Token found on home page - redirecting to profile");
      router.push("/profile");
    }
  }, [router]);

  const handleSignIn = () => {
    router.push("/login");
  };


  return (
   <div className="min-h-screen font-sans bg-gray-50">
      <header className="w-full flex items-center justify-start px-8 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-2">
           <HeartIcon width={32} height={32}/>
          <h1 className="text-xl font-bold">GraphQL</h1>
         
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen pt-24 space-y-4">
        <div className="w-[400px] h-[300px] overflow-hidden rounded-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>

        <h1 className="text-[120px] font-bold text-black-300 dark:text-black-400 text-center font-sans">
          GraphQL
        </h1>
        <p className="text-[20px] dark:text-black-300 text-center font-sans"> The easiest and fastest way to access your information!</p>
       
            <div className="flex justify-center">
              <div className="flex justify-center">
        <Button
          type="submit"
          onClick={handleSignIn}
          className="bg-black text-white rounded-[22px] px-[30px] min-w-[146px] h-[44px] font-sans font-semibold text-[19px] leading-[20px] m-auto"
        >
          Sign In 🎀
        </Button>
      </div>

        </div>
      </main>
    </div>
  );
}