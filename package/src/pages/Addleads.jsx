import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { TbFileLike } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";

const data = [
  {
    heading: "Personal Loan",
    icon: <TbFileLike className="text-2xl text-white" />,
    bgcolor: "bg-rose-500",
  },
  {
    heading: "Business Loan",
    icon: <FaBusinessTime className="text-2xl text-white" />,
    bgcolor: "bg-orange-600",
  },
  {
    heading: "Gold Loan",
    icon: <FaCoins className="text-2xl text-white" />,
    bgcolor: "bg-yellow-400",
  },
  {
    heading: "Credit Card",
    icon: <AiFillCreditCard className="text-2xl text-white" />,
    bgcolor: "bg-green-500",
  },
  {
    heading: "Bank Account",
    icon: <BsBank className="text-2xl text-white" />,
    bgcolor: "bg-slate-500",
  },
  {
    heading: "Demat Account",
    icon: <BsBank className="text-2xl text-white" />,
    bgcolor: "bg-slate-500",
  },
];

const data2 = [
  {
    heading: "Home Loan",
    icon: <AiFillHome className="text-2xl text-white" />,
    bgcolor: "bg-rose-500",
  },
  {
    heading: "Home Loan Balance Transfer",
    icon: <AiFillIdcard className="text-2xl text-white" />,
    bgcolor: "bg-sky-400",
  },
  {
    heading: "Mortgage Loan",
    icon: <AiFillHome className="text-2xl text-white" />,
    bgcolor: "bg-slate-500",
  },
  {
    heading: "Car Loan",
    icon: <AiFillCar className="text-2xl text-white" />,
    bgcolor: "bg-indigo-500",
  },
  {
    heading: "Used Car",
    icon: <AiFillCar className="text-2xl text-white" />,
    bgcolor: "bg-orange-500",
  },
];

const Addleads = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">
            <WelcomeBanner />
            <div className="rounded border border-slate-300">
              <div className="bg-slate-700 p-5">
                <h1 className="text-center text-white">Digital Process</h1>
              </div>
              <div className="grid grid-cols-3 gap-4 m-5">
                {data.map((e) => {
                  return (
                    <Link to="/leadform">
                      <div className="flex items-center justify-between p-3 border border-slate-300 rounded-md bg-white">
                        <h6 className="text-slate-700 font-bold pr-1">
                          {e.heading}
                        </h6>
                        <div
                          className={`w-10 h-10 ${e.bgcolor} rounded-full p-2`}
                        >
                          {e.icon}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="rounded border border-slate-300 mt-5">
              <div className="bg-slate-700 p-5">
                <h1 className="text-center text-white">Paper Process</h1>
              </div>
              <div className="grid grid-cols-3 gap-4 m-5 ">
                {data2.map((e) => {
                  return (
                    <Link to="/leadform">
                      <div className="flex items-center justify-between p-3 border border-slate-300 rounded-md bg-white">
                        <h6 className="text-slate-700 font-bold pr-1">
                          {e.heading}
                        </h6>
                        <div
                          className={`w-10 h-10 ${e.bgcolor} rounded-full p-2`}
                        >
                          {e.icon}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Addleads;
