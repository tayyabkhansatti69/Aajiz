"use client";

// import { bgImage } from "@assets/images";
import { Container, Typography, Box, Stack } from "@mui/material";
// import { CareersHeader } from "./header";
// import { useGetJobPostsInternalQuery } from "@services/configuration/job-boards/job-boards-api";

export function HeroSection(props: any): JSX.Element {
  const { companyName } = props;
  console.log(companyName)
  // const { data } = useGetJobPostsInternalQuery({
  //   companyName,
  // });
// const data=[]
  

  return (
    <>
      {/* <CareersHeader logo={data?.data?.boardInfo.logo} /> */}
      <Box sx={{ background: "radial-gradient( #7555ef, #502fb4)" }}>
        <Box
          sx={{
            maxHeight: "75dvh",
            // backgroundImage: `url(${bgImage.src})`,
            backgroundPosition: "right center",
            backgroundSize: 1000,
            backgroundRepeat: "no-repeat",
            pt: {
              md: 33,
              sm: 28,
              xs: 25,
            },
            pb: {
              md: 10,
              xs: 3,
            },
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              maxWidth: {
                md: "90%",
                xs: "100%",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              alignItems="center"
              direction="column"
              spacing={0}
              textAlign="center"
            >
              <Stack
                direction="column"
                alignItems="center"
                spacing={3}
                sx={{
                  pb: {
                    md: 20,
                    sm: 15,
                    xs: 10,
                  },
                }}
              >
                <Typography
                  sx={{
                    typography: {
                      xs: "h3",
                      sm: "h2",
                    },
                    letterSpacing: "-1.2px",
                  }}
                  color="common.white"
                >
                  Careers
                </Typography>
                <Typography
                  variant="body1"
                  maxWidth={540}
                  color="common.white"
                  sx={{ lineHeight: "30px" }}
                >
                  {/* {data?.data?.boardInfo.description
                    ? data?.data?.boardInfo.description.replace(/<\/?p>/g, "")
                    : "Transforming software systems for business growth by developing and delivering innovative solutions."} */}
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
