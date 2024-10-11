import IconBrainCloud from "@/src/assets/icons/Icon-brain-cloud";
import IconAttachment from "@/src/assets/icons/iconAttachment";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import IconGrammar from "@/src/assets/icons/resource/IconGrammer";
import IconListening from "@/src/assets/icons/resource/IconListen";
import IconSpeaking from "@/src/assets/icons/resource/iconSpeaking";
import IconWriting from "@/src/assets/icons/resource/iconWriting";
import IconOtherSkills from "@/src/assets/icons/resource/IconOtherSkills";
import IconReading from "@/src/assets/icons/resource/IconReading";
import IconPresentSample from "@/src/assets/icons/resource/IconPresentSample";
import IconAudio24 from "@/src/assets/icons/resource/IconAudio24";
import IconLecture23 from "@/src/assets/icons/resource/IconLecture23";
import IconFile3 from "@/src/assets/icons/resource/IconFile3";
import IconLectureContant from "@/src/assets/icons/resource/IconLectureContant";
import IconDataStock from "@/src/assets/icons/resource/IconDataStock";

function ResourcesSection() {
  const data = [
    {
      header: "Grammar",
      HeadIcon: IconGrammar,
      headIconBgColor:"#E4F8FFE5",
      subtitle: "Present Sample",
      SubtitleIcon:IconPresentSample,
    },
    {
      header: "Listening",
      HeadIcon: IconListening,
      headIconBgColor:"#EBEBFF",
      subtitle: "Audio 24",
      SubtitleIcon:IconAudio24,
    },
    {
      header: "Speaking",
      HeadIcon: IconSpeaking,
      headIconBgColor:"#D0E0FF",
      subtitle: "Lecture 23",
      SubtitleIcon:IconLecture23,
    },
    {
      header: "Reading",
      HeadIcon: IconReading,
      headIconBgColor:"#E1F7E3",
      subtitle: "File 3",
      SubtitleIcon:IconFile3,
    },
    {
      header: "Writing",
      HeadIcon: IconWriting,
      headIconBgColor:"#D1FAE5",
      subtitle: "Lecture Content",
      SubtitleIcon:IconLectureContant,
    },
    {
      header: "Other Skills",
      HeadIcon: IconOtherSkills,
      headIconBgColor:"#FEF3C7",
      subtitle: "Data stock",
      SubtitleIcon:IconDataStock,
    },
  ];
  return (
    <Grid mt={7} p={5} spacing={2} container>
      {data.map((item) => (
        <Card key={item.header} {...item} />
      ))}
    </Grid>
  );
}

export default ResourcesSection;

const Card = ({
  header,
  subtitle,
  HeadIcon,
  headIconBgColor,
  SubtitleIcon
}: any) => {
  return (
    <Grid xs={12} lg={4} item>
      <Paper
        variant="elevation"
        sx={{ p: 3, height: "fit-content" }}
        elevation={2}
      >
        <Stack gap={3}>
          <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                bgcolor: headIconBgColor,
                borderRadius: "50%",
                display: "flex",
                alignItems:"center",
                justifyContent: "center",
              }}
            >
              <HeadIcon />
            </Box>
            <Typography variant="body1" fontWeight={"bold"} color="#1D2026">
              {header}
            </Typography>
            <Box ml={"auto"}>
              <IconBrainCloud />
            </Box>
          </Stack>
          <TextField
            variant="outlined"
            label="Add Link"
            placeholder="past your video or google drive link here"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconAttachment />
                </InputAdornment>
              ),
            }}
          />
          <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
            <Typography variant="body1" fontWeight={"bold"} color="#1D2026">
              Recent
            </Typography>
            <Box ml={"auto"}>
              <Button variant="text" color="secondary" disableRipple>
                See all
              </Button>
            </Box>
          </Stack>
          <Stack
            sx={{ bgcolor: "#E0E7FF", p: 2, borderRadius: 2 }}
            gap={2}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <SubtitleIcon />
            <Typography variant="body1" color="#374151">
              {subtitle}
            </Typography>
            <Box
              ml={"auto"}
              sx={{ display: "flex", gap: 1, alignItems: "center" }}
            >
              <IconButton>
                <BorderColorIcon sx={{ color: "#16A2C4" }} />
              </IconButton>
              <IconButton>
                <DeleteIcon sx={{ color: "error.main" }} />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};
