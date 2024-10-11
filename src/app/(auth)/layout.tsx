"use client";
import { LogoSsoAdmin } from "@/src/assets/logo-sso-admin";
import signupImg from "@/src/assets/signup/boba-log-in 1.png";
import signupImg2 from "@/src/assets/signup/daily-woman-learning-a-new-language-online 1.png";
import studentImg from "@/src/assets/signup/student.png";
import teacherImg from "@/src/assets/signup/teacher.png";
import parentImg from "@/src/assets/signup/parent.png";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import bgIMG from "../../assets/auth/dashboard-bg.png";

function Layout(props: any) {
  const { children } = props;
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const roleRenderComponent = (role: string | undefined) => {
    switch (role) {
      case "Student":
        return (
          <>
            <Stack
              gap={1}
              justifyContent={"center"}
              alignItems={"center"}
              px={1}
            >
              <Image src={studentImg} alt="sdff" />
              <Typography
                variant="h5"
                fontWeight={500}
                color="white"
                textAlign={"center"}
              >
                Welcome to Student Dashboard Sign up
              </Typography>
              <Typography
                variant="h6"
                fontWeight={500}
                color="white"
                textAlign={"center"}
              >
                Welcome to Tutor Hub &ndash;your ultimate online language learning platform! Here&#39;s what we offer:
              </Typography>
              <List sx={{ color: "white" }}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Interactive Lessons: Engaging and fun courses tailored to your pace." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Expert Guidance: Learn from certified and experienced tutors." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Progress Tracking: Monitor your improvement with regular assessments.." />
                </ListItem>
              </List>
            </Stack>
          </>
        );
      case "Teacher":
        return (
          <>
            <Stack
              gap={1}
              justifyContent={"center"}
              alignItems={"center"}
              px={1}
            >
              <Image src={teacherImg} alt="sdff" />
              <Typography
                variant="h5"
                fontWeight={500}
                color="white"
                textAlign={"center"}
              >
                Welcome to Tutor Dashboard Sign up
              </Typography>
              <Typography
                variant="h6"
                fontWeight={500}
                color="white"
                textAlign={"center"}
              >
                Welcome to Tutor Hub &ndash; your ultimate online language learning platform! Here&#39;s what we offer:
              </Typography>
              
              <List sx={{ color: "white" }}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Flexible Teaching: Create and manage courses with ease." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Student Engagement: Connect with students through interactive lessons." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Professional Growth: Enhance your teaching skills and earn certifications.Progress Tracking: Monitor your improvement with regular assessments.." />
                </ListItem>
              </List>
            </Stack>
          </>
        );
      case "Parent":
        return (
          <>
            <Stack
              gap={1}
              justifyContent={"center"}
              alignItems={"center"}
              px={1}
            >
              <Image src={parentImg} alt="sdff" />
              <Typography
                variant="h5"
                fontWeight={500}
                color="white"
                textAlign={"center"}
              >
               Welcome to Parents Dashboard Sign up
              </Typography>
              <Typography
                variant="h6"
                fontWeight={500}
                color="white"
                textAlign={"center"}
              >
                Welcome to Tutor Hub &ndash; your ultimate online language learning platform! Here&#39;s what we offer:
              </Typography>
              <List sx={{ color: "white" }}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Track Progress: Stay informed about your child's learning journey." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Safe Environment: Ensure a secure and supportive learning space." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: 10 }} />
                  </ListItemIcon>
                  <ListItemText primary="Involved Learning: Participate in your child's educational development" />
                </ListItem>
              </List>
            </Stack>
          </>
        );
    
      default:
        return null;
    }
  };
  return (
    <>
      <Grid container>
        <Grid bgcolor="#3269D3" height="100vh" width="100%">
          <Box position={"absolute"} zIndex={1}>
            <svg
              width="679"
              height="318"
              viewBox="0 0 679 318"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M678 -31.1278C541.404 268.099 188.614 399.733 -110.048 262.878M626.584 -54.6739C505.354 210.938 192.176 327.763 -72.881 206.304C-201.768 147.226 -295.561 42.7066 -344 -79.605M581.654 -75.29C473.823 160.916 195.313 264.849 -40.4999 156.814C-155.083 104.342 -238.509 11.3829 -281.577 -97.451M540.287 -94.2015C444.792 114.943 198.185 206.943 -10.5646 111.32C-112.068 64.7611 -185.923 -17.5436 -224.046 -113.859M499.664 -112.847C416.345 69.7154 201.003 150.049 18.7858 66.5724C-69.7971 25.9794 -134.294 -45.8841 -167.579 -130"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Box zIndex={1} position={"relative"}>
            <Grid container mt={3}>
              <Grid lg={2} item />
              <Grid xs={12} lg={8} item>
                <Paper variant="elevation" elevation={2}>
                  <Grid container>
                    <Grid
                      xs={12}
                      lg={6}
                      item
                      sx={{
                        backgroundImage: `url(${bgIMG.src})`,
                        backgroundRepeat: "no-repeat",

                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        height: "80vh",
                        borderRadius: 1,
                        position: "relative",
                      }}
                    >
                      <Box
                        position={"relative"}
                        zIndex={3}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                      >
                        <LogoSsoAdmin
                          sx={{
                            width: 300,
                            height: 80,
                            "& path": { fill: "white" },
                          }}
                        />
                        {pathName === "/sign-up" && (
                          <>
                            {role && (
                              <>
                              {roleRenderComponent(role)}
                              </>
                            )}
                            {!role && (
                              <>
                                <Stack
                                  gap={1}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  px={1}
                                >
                                  <Image src={signupImg2} alt="sdff" />
                                  <Typography
                                    variant="h5"
                                    fontWeight={500}
                                    color="white"
                                    textAlign={"center"}
                                  >
                                    Welcome to Tutor Hub Dashboard
                                  </Typography>
                                  <Typography
                                    variant="h6"
                                    fontWeight={500}
                                    color="white"
                                    textAlign={"center"}
                                  >
                                    Welcome to Tutor Hub &ndash; your ultimate online
                                    language learning platform! Here&#39;s what we
                                    offer:
                                  </Typography>
                                  <List sx={{ color: "white" }}>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CircleIcon
                                          sx={{ color: "white", fontSize: 10 }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText primary="Interactive Courses: Engaging and structured lessons." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CircleIcon
                                          sx={{ color: "white", fontSize: 10 }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText primary="Expert Tutors: Personalized guidance from certified professionals." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CircleIcon
                                          sx={{ color: "white", fontSize: 10 }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText primary="Flexible Learning: Study at your own pace, anytime, anywhere." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CircleIcon
                                          sx={{ color: "white", fontSize: 10 }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText primary="Community Support: Join a vibrant community of learners." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CircleIcon
                                          sx={{ color: "white", fontSize: 10 }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText primary="Cultural Insights: Learn language through cultural immersion." />
                                    </ListItem>
                                  </List>
                                </Stack>
                              </>
                            )}
                          </>
                        )}
                        {pathName === "/sign-in" && (
                          <>
                            <Stack
                              gap={1}
                              justifyContent={"center"}
                              alignItems={"center"}
                              px={3}
                            >
                              <Image src={signupImg} alt="sdff" />
                              <Typography
                                variant="h5"
                                fontWeight={500}
                                color="white"
                                textAlign={"center"}
                              >
                                Welcome to Tutor Hub Dashboard
                              </Typography>
                              <Typography
                                variant="h6"
                                fontWeight={500}
                                color="white"
                                textAlign={"center"}
                              >
                                Welcome to Tutor Hub &ndash; your ultimate online
                                language learning platform! Here&#39;s what we
                                offer:
                              </Typography>
                              <Typography
                                variant="body1"
                                color="white"
                                textAlign={"center"}
                              >
                                Welcome back to Tutor Hub! Log in to continue
                                your language learning journey. Connect with
                                your lessons, track your progress, and engage
                                with our community. Let&#39;s make learning
                                languages fun and effective together!
                              </Typography>
                            </Stack>
                          </>
                        )}
                        {pathName === "/Forgot-your-password" && (
                          <Typography
                            variant="h5"
                            fontWeight={500}
                            color="white"
                          >
                            No worries, we’ll help you reset it in no time!
                          </Typography>
                        )}
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: " rgba(85, 190, 230, 0.9)",
                          zIndex: 2,
                          borderRadius: 1,
                        }}
                      />
                    </Grid>
                    <Grid xs={12} lg={6} item>
                      {/* form sections */}
                      {children}

                      {/* form sections */}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid lg={2} item />
            </Grid>
          </Box>

          <Box position={"absolute"} right={0} bottom={0}>
            <svg
              width="989"
              height="404"
              viewBox="0 0 989 404"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M1672 570.31C1448.66 80.9702 871.839 -134.297 383.519 89.5077M1587.93 608.816C1389.72 174.447 877.664 -16.6015 444.288 182.027C233.554 278.64 80.1988 449.565 1 649.587M1514.47 642.53C1338.16 256.251 882.793 86.2844 497.232 262.959C309.884 348.77 173.481 500.79 103.063 678.771M1446.84 673.457C1290.7 331.433 887.488 180.981 546.177 337.357C380.216 413.498 259.461 548.095 197.128 705.603M1380.42 703.948C1244.19 405.396 892.096 274.023 594.165 410.536C449.33 476.92 343.876 594.441 289.454 732"
                stroke="white"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
