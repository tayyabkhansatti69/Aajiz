// import { MyCalendar } from "@/components/calendar";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { MyCalendar } from "@/src/components/calendar";

function ScheduleSection() {
  return (
    <Grid p={6} mt={6} container>
      <Grid xs={12} lg={8}>
        <Paper variant="elevation" elevation={2}>
          <MyCalendar />
        </Paper>
      </Grid>
      <Grid xs={12} px={1} lg={4}>
        <Paper variant="elevation" sx={{ height: "100%", p: 3 }} elevation={2}>
          <Stack gap={2} alignItems={"flex-start"} justifyContent={"center"}>
            <Typography variant="h4" color="#374557">
              Upcoming Task
            </Typography>
            <Box
              width={"100%"}
              borderRadius={2}
              boxShadow={2}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                bgcolor: "secondary.main",
                p: 2,
                color: "white",
              }}
            >
              <CircleIcon sx={{ fontSize: 12 }} />
              <Typography variant="body1" fontWeight={"bold"} color="white">
                Schedule lesson
              </Typography>
            </Box>
            <Box
              width={"100%"}
              borderRadius={2}
              fontWeight={"bold"}
              boxShadow={2}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                bgcolor: "primary.main",
                p: 2,
                color: "white",
              }}
            >
              <CircleIcon sx={{ fontSize: 12 }} />
              <Typography variant="body1" color="white">
                Add time off
              </Typography>
            </Box>
            <Box
              width={"100%"}
              borderRadius={2}
              fontWeight={"bold"}
              boxShadow={2}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                bgcolor: "primary.main",
                p: 2,
                color: "white",
              }}
            >
              <CircleIcon sx={{ fontSize: 12 }} />
              <Typography variant="body1" color="white">
                Add extra slots
              </Typography>
            </Box>
            <Box
              width={"100%"}
              borderRadius={2}
              fontWeight={"bold"}
              boxShadow={2}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                bgcolor: "primary.main",
                p: 2,
                color: "white",
              }}
            >
              <CircleIcon sx={{ fontSize: 12 }} />
              <Typography variant="body1" color="white">
                Set up availability
              </Typography>
            </Box>
          </Stack>
          <Stack
            gap={2}
            mt={2}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Typography variant="h4" color="#374557">
              Tags
            </Typography>
            <Stack flexDirection={"row"} gap={1}>
              <Box
                display="flex"
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                minWidth={200}
              >
                <CircleIcon sx={{ fontSize: 16, color: "#4CAF50" }} />
                <Typography variant="body1" fontWeight={"bold"} color="#9A9A9A">
                  First lesson
                </Typography>
              </Box>
              <Box
                display="flex"
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                minWidth={200}
              >
                <CircleIcon sx={{ fontSize: 16, color: "#3269D3" }} />
                <Typography variant="body1" fontWeight={"bold"} color="#9A9A9A">
                  Single lesson
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection={"row"} gap={1}>
              <Box
                display="flex"
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                minWidth={200}
              >
                <CircleIcon sx={{ fontSize: 16, color: "#FC6B57" }} />
                <Typography variant="body1" fontWeight={"bold"} color="#9A9A9A">
                  Weekly lesson
                </Typography>
              </Box>
              <Box
                display="flex"
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                minWidth={200}
              >
                <CircleIcon sx={{ fontSize: 16, color: "#FEC64F" }} />
                <Typography variant="body1" fontWeight={"bold"} color="#9A9A9A">
                  Time off
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection={"row"} gap={1}>
              <Box
                display="flex"
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                minWidth={200}
              >
                <CircleIcon sx={{ fontSize: 16, color: "#9A9A9A" }} />
                <Typography variant="body1" fontWeight={"bold"} color="#9A9A9A">
                  Google Calendar
                </Typography>
              </Box>
              <Box
                display="flex"
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                minWidth={240}
              >
                <CircleIcon sx={{ fontSize: 16, color: "#9A9A9A" }} />
                <Typography variant="body1" fontWeight={"bold"} color="#9A9A9A">
                  Confirmed by student
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection={"row"} gap={1}>
              <Box
                display="flex"
                gap={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
                minWidth={200}
              >
                <CircleIcon sx={{ fontSize: 16, color: "#9A9A9A" }} />
                <Typography variant="body1" fontWeight={"bold"} color="#9A9A9A">
                  Not confirmed by student
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            mt={2}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Typography variant="h4" color="#374557">
              Upcoming Schedule
            </Typography>
            <Box
              sx={{
                width: "100%",
                borderLeft: "4px solid",
                borderColor: "#3269D3",
                p: 2,
                display: "flex",
                flexDirection: "row",
                gap: 2,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Box
                width="53px"
                height={"53px"}
                sx={{
                  bgcolor: "#DBDBDB",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2" fontWeight={"bold"} color="#374557">
                  5
                </Typography>
                <Typography variant="body2" color="#374557">
                  Jan
                </Typography>
              </Box>
              <Stack>
                <Typography variant="body1" fontWeight={"bold"} color="#374557">
                  course name
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#9A9A9A"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <AccessAlarmsIcon sx={{fontSize:14}} />
                  07.00 - 08.00 AM
                </Typography>
              </Stack>
            </Box>
           
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ScheduleSection;
