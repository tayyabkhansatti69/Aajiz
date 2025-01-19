import { LogoSsoAdmin } from "@/src/assets/logo-sso-admin";
import IconAppleStore from "@/src/assets/social-media-icons/Icon-appleStore";
import IconFacebook from "@/src/assets/social-media-icons/Icon-facebook";
import IconInstagram from "@/src/assets/social-media-icons/Icon-instagram";
import IconPlaystore from "@/src/assets/social-media-icons/Icon-playstore";
import IconYoutube from "@/src/assets/social-media-icons/icon-youtube";
import IconsTwitter from "@/src/assets/social-media-icons/Icons-twitter";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function SaleFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          boxShadow: theme.shadows[5],
          bgcolor: "#0b767a",
          py: { xs: 4, md: 7 }, // Adjust padding for mobile and normal
          px: { xs: 2, md: 8 }, // Adjust padding for mobile and normal
        })}
      >
        <Grid container spacing={2} alignItems="flex-start">
          {/* Column 1: Logo */}
          <Grid item xs={12} md={3}>
            <LogoSsoAdmin
              sx={() => ({
                width: { xs: "180px", md: "200px" }, // Adjust logo size for both views
                // height: "60px",
                path: {
                  fill: "common.white !important",
                },
              })}
            />
          </Grid>

          {/* Column 2: Links */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              mt: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack links vertically on mobile, row on desktop
                justifyContent: { md: "space-around" }, // Space evenly in desktop view
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 2, md: 3 }, // Add space between items
                flexWrap: "wrap", // Wrap links when needed in smaller screens
              }}
            >
              {[
                "Home",
                "Become Partner",
                "Become a Donor",
                "Contact Us",
                "Term & Conditions",
                "Privacy Policy",
              ].map((link, idx) => (
                <Typography
                  key={idx}
                  variant="subtitle1"
                  sx={{ color: "common.white" }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid item xs={12} md={3}>
            <Box
              width={"100%"}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap={2}
            >
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
          </Grid>
        </Grid>
      </Box>

      {/* Bottom bar */}
      <Box
        sx={(theme) => ({
          boxShadow: theme.shadows[5],
          bgcolor: "#27dad7",
          py: 2,
          px: { xs: 2, md: 8 }, // Adjust padding for both views
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack items on mobile, row for desktop
          alignItems: "center",
          justifyContent: "space-between", // Spread items in row for desktop
        })}
      >
        <Typography
          sx={{
            color: "common.white",
            textAlign: "center",
          }}
          component="span"
          variant="body2"
        >
          ©{currentYear} All rights reserved
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
          mt={{ xs: 2, sm: 0 }} // Add margin-top for mobile
        >
          <IconFacebook />
          <IconInstagram />
          <IconsTwitter />
          <IconYoutube />
        </Box>
      </Box>
    </>
  );
}

export default SaleFooter;
