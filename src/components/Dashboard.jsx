import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
      <main className="dashboard-content">
        <Outlet /> {/* This will render the matched nested route */}
      </main>
    </div>
  );
};

export default Dashboard;
