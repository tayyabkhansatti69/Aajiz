import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import section from "../../../assets/as/section_7.svg";
import Image from "next/image";

function Section_7() {
  return (
    <Container maxWidth={"lg"}>
      <Stack justifyContent={"center"} alignItems={"center"} py={5}>
        <Image src={section} alt="section" />
        <Container sx={{ backgroundColor: "rgba(20, 179, 224, 1)",p:5,borderRadius:5 }}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap:8
            }}
          >
            <Box>
              <Typography variant="h1" color={"common.white"}>
                45k+
              </Typography>
              <Typography variant="subtitle2" color={"common.white"}>
                Active Student
              </Typography>
            </Box>
            <svg
              width="2"
              height="109"
              viewBox="0 0 2 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.0507812"
                width="2"
                height="108"
                rx="1"
                fill="url(#paint0_linear_12_23821)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_12_23821"
                  x1="1"
                  y1="0.0507812"
                  x2="1"
                  y2="108.051"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Box>
              <Typography variant="h1" color={"common.white"}>
                79+
              </Typography>
              <Typography variant="subtitle2" color={"common.white"}>
              Faculty Courses
              </Typography>
            </Box>
            <svg
              width="2"
              height="109"
              viewBox="0 0 2 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.0507812"
                width="2"
                height="108"
                rx="1"
                fill="url(#paint0_linear_12_23821)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_12_23821"
                  x1="1"
                  y1="0.0507812"
                  x2="1"
                  y2="108.051"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Box>
              <Typography variant="h1" color={"common.white"}>
                156k
              </Typography>
              <Typography variant="subtitle2" color={"common.white"}>
              Best Professors
              </Typography>
            </Box>
            <svg
              width="2"
              height="109"
              viewBox="0 0 2 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.0507812"
                width="2"
                height="108"
                rx="1"
                fill="url(#paint0_linear_12_23821)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_12_23821"
                  x1="1"
                  y1="0.0507812"
                  x2="1"
                  y2="108.051"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Box>
              <Typography variant="h1" color={"common.white"}>
                42k
              </Typography>
              <Typography variant="subtitle2" color={"common.white"}>
              Award Achieved
              </Typography>
            </Box>
            
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}

export default Section_7;
