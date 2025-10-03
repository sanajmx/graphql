import React from "react";
import HeartIcon from "@/components/ui/heart-icon";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">GraphQL</h1>
      <HeartIcon className="text-red-500" width={32} height={32} />
    </header>
  );
};

export default Header;
