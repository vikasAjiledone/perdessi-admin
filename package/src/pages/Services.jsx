import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import "./Service/Services.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// -----> ICONS <-----
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DiamondIcon from "@mui/icons-material/Diamond";
import PanToolAltSharpIcon from "@mui/icons-material/PanToolAltSharp";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AirplaneTicketRoundedIcon from "@mui/icons-material/AirplaneTicketRounded";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FlagIcon from "@mui/icons-material/Flag";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const Services = () => {
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="sm:flex-col  sm:justify-around sm:items-center mb-8">
              {/* Loan */}
              <div className="flex-col my-7 w-full bg-slate-200 p-4 rounded-lg">
                <p className="text-xl">Loans</p>
                <>
                  <div className="flex justify-around mx-3 my-4">
                    <div className="Card-div">
                      {/* HOME LOAN */}
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-red-400 to-red-600 ">
                        <CardContent>
                          <HomeIcon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>Home Loan</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -	Business LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-fuchsia-400 to-fuchsia-700">
                        <CardContent>
                          <BusinessCenterOutlinedIcon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>Business Loan</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -Personal LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-indigo-300 to-indigo-800 ">
                        <CardContent>
                          <PersonRoundedIcon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>Personal Loan</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -	Mortgage LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-cyan-300 to-cyan-800 ">
                        <CardContent>
                          <DirectionsCarFilledIcon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>Mortgage Loan</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* -	Gold LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-amber-200 to-amber-600 ">
                        <CardContent>
                          <DiamondIcon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>Gold Loan</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* -	Credit Card */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-orange-200 to-orange-600 ">
                        <CardContent>
                          <HomeIcon className="Home-Icon" />
                          <div className="HL-Card-Heading">
                            <h5>
                              Home Loan <br /> Balance Transfer
                            </h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </>
              </div>

              {/* Goverment */}
              <div className="flex-col my-7 w-full bg-slate-200 p-4 rounded-lg">
                <p className="text-xl">Goverment related services</p>
                <>
                  <div className="flex justify-around mx-3 my-4">
                    <div className="Card-div">
                      {/* HOME LOAN */}
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-red-400 to-red-600 ">
                        <CardContent>
                          <PanToolAltSharpIcon className="Home-Icon" />
                          <div className="HL-Card-Heading">
                            <h5>New/ Correction Pan application</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -	Business LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-fuchsia-400 to-fuchsia-700">
                        <CardContent>
                          <ArticleOutlinedIcon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>PF withdrawal</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -Personal LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-indigo-300 to-indigo-800 ">
                        <CardContent>
                          <AirplaneTicketRoundedIcon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>Passport</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -	Mortgage LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-cyan-300 to-cyan-800">
                        <CardContent>
                          <CurrencyRupeeIcon className="Home-Icon" />
                          <div className="HL-Card-Heading">
                            <h5>GST registration application</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* -	Gold LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-amber-200 to-amber-600 ">
                        <CardContent>
                          <FlagIcon className="Home-Icon" />
                          <div className="IRS-Card-Heading">
                            <h5>UDYAM Registration</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* -	Credit Card */}
                    <div className="Card-div">
                      <Card className="shadow-md mx-1 w-40 h-40 bg-gradient-to-tl from-orange-200 to-orange-600">
                        <CardContent>
                          <CurrencyRupeeIcon className="Home-Icon" />
                          <div className="IRS-Card-Heading">
                            <h5>Income Tax returns</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </>
              </div>

              {/* Insurance */}
              <div className="flex-col my-7 w-full bg-slate-200 p-4 rounded-lg">
                <p className="text-xl">Insurance related services</p>
                <>
                  <div className="flex justify-around mx-3 my-4">
                    <div className="Card-div">
                      {/* HOME LOAN */}
                      <Card className="shadow-md  w-40 h-40 bg-gradient-to-tl from-cyan-300 to-cyan-800">
                        <CardContent>
                          <MonitorHeartRoundedIcon className="Home-Icon" />
                          <div className="IRS-Card-Heading">
                            <h5>Health Insurance</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -	Business LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md w-40 h-40 bg-gradient-to-tl from-orange-200 to-orange-600">
                        <CardContent>
                          <Diversity1Icon className="Home-Icon" />
                          <div className="Card-Heading">
                            <h5>Life Insurance</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -Personal LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md w-40 h-40 bg-gradient-to-tl from-fuchsia-400 to-fuchsia-700">
                        <CardContent>
                          <CarCrashIcon className="Home-Icon" />
                          <div className="IRS-Card-Heading">
                            <h5>Motor Insurance</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* -	Mortgage LOAN */}
                    <div className="Card-div">
                      <Card className="shadow-md w-40 h-40 bg-gradient-to-tl from-red-400 to-red-600">
                        <CardContent>
                          <Diversity2Icon className="Home-Icon" />
                          <div className="IRS-Card-Heading">
                            <h5>General Insurance</h5>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;
