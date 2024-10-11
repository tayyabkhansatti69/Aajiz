// import { Grid, Typography, Button, Box } from "@mui/material";
import bgIMG from "@/src/assets/auth/dashboard-bg.png";
import landingMeeting from "@/src/assets/image/landing-section.png";
import IconsVideoCourse from "@/src/assets/svg-components/Icons-video-course";
import IconsTutor from "@/src/assets/svg-components/icons-tutor";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from "@mui/material";

function Section_one() {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Box
          sx={{
            backgroundImage: `url(${bgIMG.src})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",

            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: " rgba(85, 190, 230, 0.9)",
              zIndex: 2,
              borderRadius: 1,
            }}
          />
          <Box position="relative" zIndex={3} width="100%">
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                transform: "translate(200px, 300px)",
              }}
            ></Box>

            <SvgIcon
              viewBox="0 0 25 25"
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateY(-100px) translateX(-50%)",
              }}
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="white" />
            </SvgIcon>
            <Container sx={{ position: "relative", zIndex: 3, py: 5, mt: 4 }}>
              <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid item lg={6} sx={{ order: { lg: 2 } }}>
                  <Box
                    sx={{
                      mx: "auto",
                      // border: "1px solid lightgrey",
                      // borderRadius: "50%",
                      position: "relative",
                      mb: { xs: 5, lg: 0 },
                      zIndex: 2,
                      // width: "75%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={landingMeeting.src}
                      alt="Landing Section Girl"
                      sx={{
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 123, 255, 0.5)",
                      }}
                    />
                    <Card
                      sx={{
                        boxShadow: 3,
                        borderRadius: 3,
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        transform: "translateY(-50%) translateX(-25%)",
                        zIndex: 3,
                        mb: 3,
                        display: { xs: "none", lg: "block"},
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                          px: 3,
                          py: 2,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "secondary.main",
                            color: "white",
                            borderRadius: 1,
                            p: 1,
                          }}
                        >
                          <IconsVideoCourse sx={{fontSize: 40}} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", mb: 0 }}
                          >
                            2K
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            Video Courses
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                    <Card
                      sx={{
                        boxShadow: 3,
                        borderRadius: 3,
                        textAlign: "center",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        transform: "translate(45%, -25%)",
                        zIndex: 3,
                        mb: 3,
                        display: { xs: "none", lg: "block"},
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                          p: 3,
                        }}
                      >
                        {/* <Box sx={{ borderRadius: 1, px: 2, py: 1 }}></Box> */}
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: "bold",
                              mb: 0,
                              display: "flex",
                              flexDirection: "column",
                              alignContent: "center",
                              justifyContent: "center",
                              alignItems: "center",
                              gap:1
                            }}
                          >
                            <CircularProgress
                              color="secondary"
                              variant="determinate"
                              value={65}
                              size={45}
                              thickness={5}
                            />
                            5K
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            Online Courses
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                    <Card
                      sx={{
                        boxShadow: 3,
                        borderRadius: 3,
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25%, 0)",
                        zIndex: 3,
                        mb: 3,
                        display: { xs: "none", lg: "block"},
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                          p: 2,
                          px: 3,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "secondary.main",
                            color: "white",
                            borderRadius: 1,
                            px: 1,
                            py: 1,
                          }}
                        >
                          <IconsTutor sx={{ fontSize: 40 }}/>
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            Tutors
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", mb: 0 }}
                          >
                            250+
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: { xs: "center", lg: "left" },
                    color: "white",
                  }}
                >
                  <Box mr={8}>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                    >
                      <span style={{ color: "black" }}>Up Your </span>
                      <span style={{ color: "white" }}>Skills </span>
                      <br />
                      <span style={{ color: "black" }}>To </span>
                      <span style={{ color: "white" }}>Advance </span>
                      <span style={{ color: "black" }}>Your </span>
                      <br />
                      <span style={{ color: "white" }}>Career </span>
                      <span style={{ color: "black" }}>Path </span>
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{
                        borderRadius: 50,
                        px: 4,
                        mt: 4,
                        "&:hover": {
                          backgroundColor: "secondary.main",
                          color: "white",
                        },
                      }}
                      href=""
                      disableElevation
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                    >
                      Start Free Trial
                      <SvgIcon
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{ ml: 1 }}
                      >
                        <path
                          d="M1.15747 7.55005H14.2825M14.2825 7.55005L8.65747 1.92505M14.2825 7.55005L8.65747 13.175"
                          stroke="white"
                          strokeWidth="1.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </SvgIcon>
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section_one;
{
  /* <Box
sx={{
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translate(-160px, 20px)",
}}
>
 <Image src="/assets/icons/bg/bg-circles.svg" width={390} height={390} alt="Background Circle" /> 
</Box> */
}
