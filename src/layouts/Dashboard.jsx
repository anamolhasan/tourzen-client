import React from "react";
import {  Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import DashboardAside from "../components/shared/DashboardAside";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto grid grid-cols-6 gap-5 ">
        <aside className="col-span-2   p-4 space-y-2">
          <DashboardAside />
        </aside>

        <div className="col-span-4 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
