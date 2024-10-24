"use client";

import DashboardSection from "@/src/sections/appsite/app/dashboard";
import { DonorDashboardSection } from "@/src/sections/appsite/app/donor-dashboard-section";
import { PartnerDashboardSection } from "@/src/sections/appsite/app/partner-section/partner-dashboard";
import React from "react";

function Home() {
  const myValue: any = localStorage.getItem("rememberMe");
  const data: any = JSON.parse(myValue);

  return !data?.Data_User?.kyc ? (
    <DashboardSection />
  ) : data?.Data_User?.account_type === "donor" ? (
    <DonorDashboardSection />
  ) : data?.Data_User?.account_type === "partner" ? (
    <PartnerDashboardSection />
  ) : (
    ""
  );
}

export default Home;
