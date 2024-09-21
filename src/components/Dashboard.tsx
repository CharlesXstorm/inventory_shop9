import Image from "next/image";
import React from "react";
import Gutter from "./ui/Gutter";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Gutter className="bg-black">
        <Image src="/icons/S9.svg" alt="logo" width={48} height={48} />
      </Gutter>
    </div>
  );
};

export default Dashboard;
