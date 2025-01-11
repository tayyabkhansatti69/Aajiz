"use client";

import AdminDashboardSection from "@/src/sections/appsite/app/admin/admin-dashboard";
import DashboardSection from "@/src/sections/appsite/app/dashboard";
import { DonorDashboardSection } from "@/src/sections/appsite/app/donor-dashboard-section";
import { PartnerDashboardSection } from "@/src/sections/appsite/app/partner-section/partner-dashboard";
import PartnerKyc from "@/src/sections/appsite/app/partner-section/partner-kyc";
import React from "react";

function Home() {
  const myValue: any = localStorage.getItem("rememberMe");
  const data: any = JSON.parse(myValue);

  return !data?.Data_User?.kyc_verify ? (
    data?.Data_User?.account_type === "donor" ? (
      <DashboardSection />
    ) : data?.Data_User?.account_type === "partner" ? (
      <PartnerKyc />
    ) : (
      ""
    )
  ) : data?.Data_User?.account_type === "donor" ? (
    <DonorDashboardSection />
  ) : data?.Data_User?.account_type === "partner" ? (
    <PartnerDashboardSection />
  ) : data?.Data_User?.account_type === "admin" ? (
    <AdminDashboardSection />
  ) : (
    ""
  );
}

export default Home;
