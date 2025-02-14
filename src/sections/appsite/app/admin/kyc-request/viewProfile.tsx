import {
  Avatar,
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export function ViewProfileSection() {
  const { back } = useRouter();

  return (
    <Stack>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          back();
        }}
        sx={{ mr: "auto", color: "black" }}
      >
        Back
      </Button>
      <Card sx={{ p: 4 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 100, height: 100 }} />
            <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  backgroundColor: "#e2f7f7",
                  textAlign: "center",
                  px: 3,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                Status
              </Typography>
              <Typography variant="h6">Name</Typography>
              <Typography>Type</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#0EBDBE",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <DoneIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#F36F56",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Typography sx={{ px: 10 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          quibusdam facere ab ex consectetur repellendus vel maxime voluptate
          nesciunt. Aspernatur impedit quam officiis? Expedita sint distinctio
          voluptate assumenda eius dolorem perspiciatis inventore, sapiente
          optio culpa ratione exercitationem? Nulla laudantium rerum commodi,
          dolorum ipsum ullam ab nam corrupti. Voluptate consequatur optio,
          culpa voluptatum assumenda perferendis ullam expedita impedit ratione!
          Veritatis incidunt numquam, nam quisquam repudiandae corrupti magni?
          Natus dicta hic corrupti nisi libero beatae, provident voluptatem odit
          voluptatibus cum. Laboriosam, saepe repellendus! Sequi ipsum eligendi
          tempora, esse harum aut dolor ea officia dicta porro repellendus
          reprehenderit explicabo maxime atque veniam rerum.
        </Typography>
      </Card>
    </Stack>
  );
}
