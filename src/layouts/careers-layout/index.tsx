import type { ReactNode } from "react";
import { Box } from "@mui/material";
import CareersFooter from "./footer";

export function CareerLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <Box>
      
      {children}
      <CareersFooter />
    </Box>
  );
}
