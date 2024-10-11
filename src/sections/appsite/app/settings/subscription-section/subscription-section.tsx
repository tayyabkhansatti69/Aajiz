import { Stack, Typography, Avatar, Paper } from "@mui/material";
import React from "react";
import person2 from "@/src/assets/image/person2.png";
import person3 from "@/src/assets/image/person3.png";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
function SubscriptionSection() {
  return (
    <Stack gap={2}>
      <Typography variant="h4" color="initial">
        My Subscription
      </Typography>
      <Paper variant="elevation" elevation={2}>
        <Stack
          gap={2}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Avatar
            variant="square"
            src={person2.src}
            alt=""
            sx={{ width: 100, height: 100 }}
          />
          <Stack gap={1}>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="body1" fontWeight={"bold"} color="initial">
                Chioma F.
              </Typography>
              <VerifiedOutlinedIcon
                sx={{ color: "neutral.600", fontSize: "16px" }}
              />
            </Stack>
            <Typography variant="subtitle2" color="initial">
              An enthusiastic Math teacher/tutor with 6 years of experience.
              Let&apos;s learn Math the fun way 🙂
            </Typography>
            <Typography variant="h6" color="initial">
              $49.00
            </Typography>
          </Stack>
        </Stack>
      </Paper>
      <Paper variant="elevation" elevation={2}>
        <Stack
          gap={2}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Avatar
            variant="square"
            src={person3.src}
            alt=""
            sx={{ width: 100, height: 100 }}
          />
          <Stack gap={1}>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="body1" fontWeight={"bold"} color="initial">
                Chioma F.
              </Typography>
              <VerifiedOutlinedIcon
                sx={{ color: "neutral.600", fontSize: "16px" }}
              />
            </Stack>
            <Typography variant="subtitle2" color="initial">
              An enthusiastic Math teacher/tutor with 6 years of experience.
              Let&apos;s learn Math the fun way 🙂
            </Typography>
            <Typography variant="h6" color="initial">
              $49.00
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default SubscriptionSection;
