"use client";

import DashboardLayout from "@/src/layouts/dashboard-layout";
import React from "react";
import Container from "@mui/material/Container";

function layout(props: any) {
  const { children } = props;
  const myValue: any = localStorage.getItem("rememberMe");
  const data: any = JSON.parse(myValue);
  return data?.Data_User?.kyc_verify ? (
    <DashboardLayout>{children}</DashboardLayout>
  ) : data?.Data_User?.account_type === "super_admin" ? (
    <DashboardLayout>{children}</DashboardLayout>
  ) : (
    <Container sx={{ m: "auto" }}>{children}</Container>
  );
}

export default layout;
