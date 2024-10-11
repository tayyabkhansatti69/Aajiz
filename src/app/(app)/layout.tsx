"use client";

import DashboardLayout from "@/src/layouts/dashboard-layout";
import React from "react";

function layout(props: any) {
  const { children } = props;
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default layout;
