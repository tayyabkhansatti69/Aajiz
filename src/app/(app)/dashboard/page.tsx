"use client";

import DashboardSection from "@/src/sections/appsite/app/dashboard";
import { DonorDashboardSection } from "@/src/sections/appsite/app/donor-dashboard-section";
import React from "react";

function Home() {
  const myValue: any = localStorage.getItem("rememberMe");
  const data: any = JSON.parse(myValue);

  return data?.Data_User?.kyc ? (
    <DashboardSection />
  ) : (
    <DonorDashboardSection />
  );
}

export default Home;
