import { LogoSsoAdmin } from "@/src/assets/logo-sso-admin";
import IconAppleStore from "@/src/assets/social-media-icons/Icon-appleStore";
import IconFacebook from "@/src/assets/social-media-icons/Icon-facebook";
import IconInstagram from "@/src/assets/social-media-icons/Icon-instagram";
import IconPlaystore from "@/src/assets/social-media-icons/Icon-playstore";
import IconYoutube from "@/src/assets/social-media-icons/icon-youtube";
import IconsTwitter from "@/src/assets/social-media-icons/Icons-twitter";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import mainLogo from "../../../assets/mainLogo2.png";
// import Image from "next/image";

function SaleFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          boxShadow: theme.shadows[5],
          bgcolor: "rgba(50, 105, 211, 1)",
          py: 7,
          px: 4,
        })}
      >
        <Grid container>
          <Grid xs={12} md={3} item>
            {/* <Image src={mainLogo} alt="dfd" /> */}
            <LogoSsoAdmin
              sx={() => ({
                width: "300px",
                height: "60px",
                path: {
                  fill: "common.white !important",
                },
              })}
            />
          </Grid>
          <Grid xs={12} md={3} item>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography
                variant="h5"
                sx={{
                  color: "common.white",
                }}
              >
                Useful Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pl: 0.5,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "4px",
                    borderRadius: "4px",
                    bgcolor: "common.white",
                  }}
                />
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Who we are
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  How it works
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Tutor reviews
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Policies for Students
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Policies for Tutors
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={3} item>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography
                variant="h5"
                sx={{
                  color: "common.white",
                }}
              >
                Tutor hub
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pl: 0.5,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "4px",
                    borderRadius: "4px",
                    bgcolor: "common.white",
                  }}
                />
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Become Teacher
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Blog
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Legal Center
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Events
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={3} item>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography
                variant="h5"
                sx={{
                  color: "common.white",
                }}
              >
                Get In Touch
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pl: 0.5,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "4px",
                    borderRadius: "4px",
                    bgcolor: "common.white",
                    pl: 3,
                  }}
                />
                <Typography variant="subtitle1" sx={{ color: "common.white" }}>
                  Connect with us on our social <br /> media platforms
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconFacebook />
                  <IconInstagram />
                  <IconsTwitter />
                  <IconYoutube />
                </Box>
                <Box width={"100%"} display="flex" alignItems="center">
                  <IconPlaystore
                    sx={{
                      height: 40,
                      width: 135,
                    }}
                  />
                  <IconAppleStore
                    sx={{
                      height: 40,
                      width: 135,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={(theme) => ({
          boxShadow: theme.shadows[5],
          bgcolor: "rgba(78, 127, 222, 1)",
          py: 1.8,
          px: 3,
          display: "flex",
          alignItems: "center",
        })}
      >
        <Typography
          sx={{ color: "common.white" }}
          component="span"
          variant="body2"
        >
          ©{currentYear}.Tutor All rights reserved
        </Typography>
        <Box ml="auto" display="flex" alignItems="center" gap={1}>
          <Typography
            sx={{ color: "common.white" }}
            component="span"
            variant="body2"
          >
            Term of Use
          </Typography>
          <Typography
            sx={{ color: "common.white" }}
            component="span"
            variant="body2"
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SaleFooter;
