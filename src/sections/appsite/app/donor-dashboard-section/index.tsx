import {
  Box,
  Button,
  Card,
  CardMedia,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { trustedPartnersData } from "./donor-dashboard-data";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useRouter } from "next/navigation";
import {
  useGetDonorProfileQuery,
  useGetTrustedPartnersListQuery,
} from "@/src/services/donor/donor-dashboard/donor-dashboard";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#0b767a",
    ...theme.applyStyles("dark", {
      backgroundColor: "#0b767a",
    }),
  },
}));

export function DonorDashboardSection() {
  const router = useRouter();
  const params = { limit: 10, offset: 0 };
  const { data: donorProfile } = useGetDonorProfileQuery({});
  const { data } = useGetTrustedPartnersListQuery(params);

  return (
    <Stack gap={2.5}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">My Balance</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/add-balance");
          }}
        >
          Add Balance
        </Button>
      </Stack>
      <Stack
        direction={{ xl: "row", xs: "column" }}
        justifyContent="space-between"
        width="30%"
        bgcolor="#F8FFFE"
        p={2}
        borderRadius={2}
      >
        <Box>
          <Typography variant="h5" color="#0EBDBE">
            Rs. {donorProfile?.body?.current_balance}
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Current Balance
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            router?.push("/donate");
          }}
        >
          Donate Now
        </Button>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Trusted Partner</Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          See All
        </Typography>
      </Stack>
      <Box
        sx={{
          py: 0.5,
          overflowX: "auto",
          width: "100%",
          "&::-webkit-scrollbar": {
            height: 8, // Reducing the height of the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#0ebdbe", // Custom color for the scrollbar thumb
            borderRadius: 8, // Rounded scrollbar thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#09a4a6", // Change color on hover
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0", // Track background color
            borderRadius: 8,
          },
        }}
      >
        <Stack direction="row" spacing={3} sx={{ width: "max-content" }}>
          {data?.body?.map((items) => (
            <Card key={items?.id} sx={{ p: 1, minWidth: 200 }}>
              <CardMedia
                component="img"
                src={items.Business_logo}
                alt="Landing Section Girl"
                sx={{ height: "10rem" }}
              />
              <Typography
                textAlign="center"
                variant="subtitle1"
                fontWeight={600}
              >
                {items?.Business_name}
              </Typography>
            </Card>
          ))}
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Campaigns</Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          See All
        </Typography>
      </Stack>
      <Box
        sx={{
          py: 0.5,
          overflowX: "auto",
          width: "100%",
          "&::-webkit-scrollbar": {
            height: 8, // Reducing the height of the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#0ebdbe", // Custom color for the scrollbar thumb
            borderRadius: 8, // Rounded scrollbar thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#09a4a6", // Change color on hover
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0", // Track background color
            borderRadius: 8,
          },
        }}
      >
        <Stack direction="row" spacing={3} sx={{ width: "max-content" }}>
          {trustedPartnersData.map((items) => (
            <Card key={items?.id} sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                src={items.image.src}
                alt="Landing Section Girl"
                sx={{ height: "10rem" }}
              />
              <Stack py={1} px={1} gap={1}>
                <Typography fontWeight={500}>{items?.name}</Typography>
                <BorderLinearProgress variant="determinate" value={50} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle2">Raised - 1M</Typography>
                  <Typography variant="subtitle2" color="#0ebdbe">
                    Goal - $1M
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{ width: "50%" }}
                  onClick={() => {
                    router.push("campaign-donation");
                  }}
                >
                  Donate
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
