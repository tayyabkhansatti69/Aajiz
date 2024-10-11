// import { footerLogo } from "@assets/images";
import { Box, Container } from "@mui/material";
// import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function CareerLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  
  return (
    <Box>
      {children}
      {/* <CareersFooter /> */}
      <Box
        component="footer"
        sx={{
          // backgroundColor: () =>
          //   theme.palette.mode === "dark" ? "neutral.800" : "common.white",
          borderTopColor: "divider", // TODO: color to be changed
          borderTopStyle: "solid",
          borderTopWidth: 1,
          pt: {
            md: 4,
            xs: 3,
          },
        }}
      >
        <Container maxWidth="xxl">
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "start", md: "center" },
              justifyContent: "flex-end",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Link target="_blank" href="https://www.personnellibrary.co.uk/">
            <Box>
              {/* <Image src={footerLogo} alt="logo" style={{
                maxWidth: "150px",
                height:"auto"
              }} /> */}
            </Box>
            </Link>
            
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
