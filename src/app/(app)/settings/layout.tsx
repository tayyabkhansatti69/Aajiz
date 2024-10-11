"use client";

import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useContext } from "react";
import { ConfigurationNavList } from "./data";

export default function LayoutConfiguration({ children }: any): JSX.Element {
  const pathName = usePathname();
  const theme: any = useTheme();
  return (
    <Grid container spacing={2} p={6} px={2}>
      <Grid item md={3} xs={12}>
        <Box
          sx={{
            borderRadius: 1,
            backgroundColor: "background.paper",
            py: 2,
            height:"100%",
            minHeight: "75vh",
            a: {
              textDecoration: "none",
            },
          }}
        >
          <Stack gap={1.5} px={2}>
          {ConfigurationNavList.map(({ id, title, link }) => {
            return (
              <Box
                key={id}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  backgroundColor: !pathName.includes(link)
                    ? ""
                    : theme.palette.primary.lightest,
                    "& .MuiTypography-root": {
                      color: !pathName.includes(link)
                      ? "text.primary"
                      : "white",
                    },
                  "&:hover": {
                    backgroundColor: theme.palette.primary.lightest,
                    "& .MuiTypography-root": {
                      color: "white  ",
                    },
                  },
                }}
              >
                <Link href={link}>
                  <Stack
                    // sx={{
                    //   color:
                    //     paletteMode === "light"
                    //       ? "neutral.900"
                    //       : "primary.main",
                    //   fontSize: "16px",
                    //   fontWeight: "500",

                    //   alignItems: "center",
                    // }}
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Typography variant="body1" color="text.primary">
                      {title}
                    </Typography>
                  </Stack>
                </Link>
              </Box>
            );
          })}
          </Stack>
          
        </Box>
      </Grid>
      <Grid item md={9} xs={12}>
        <Box
          sx={{
            borderRadius: 1,
            backgroundColor: "background.paper",
            px: 2,
            pt: 2,
            pb: 5,
            minHeight: "500px",
            height:"100%",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}
