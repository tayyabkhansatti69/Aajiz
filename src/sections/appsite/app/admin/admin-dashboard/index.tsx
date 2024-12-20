import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DonorIcon from "../../../../../assets/donorIcon.png";
import DonationIcon from "../../../../../assets/donationIcon.png";
import PartnerIcon from "../../../../../assets/partnerIcon.png";
import UpIcon from "../../../../../assets/upIcon.png";
import DownIcon from "../../../../../assets/downIcon.png";

function AdminDashboardSection() {
  const data = [
    {
      id: 1,
      title: "Total Donors",
      amount: "450",
      percentage: "8.5%",
      status: "up",
      icon: DonorIcon,
    },
    {
      id: 1,
      title: "Total Donations",
      amount: "RS.89k",
      percentage: "1.5%",
      status: "down",
      icon: DonationIcon,
    },
    {
      id: 1,
      title: "Total Earning",
      amount: "RS.85k",
      percentage: "4.5%",
      status: "up",
      icon: PartnerIcon,
    },
    {
      id: 1,
      title: "Total Partners",
      amount: "45",
      percentage: "8.5%",
      status: "down",
      icon: PartnerIcon,
    },
  ];
  return (
    <Stack rowGap={4}>
      <Typography variant="h5">Dashboard</Typography>
      <Grid container spacing={2}>
        {data.map((items) => (
          <Grid item xl={3} xs={12} key={items?.id}>
            <Card sx={{ boxShadow: 1, p: 1.5 }}>
              <Stack spacing={4} sx={{ borderRadius: 5 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack spacing={2}>
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      color="#202224"
                      fontFamily="Montserrat"
                    >
                      {items?.title}
                    </Typography>
                    <Typography variant="h5">{items?.amount}</Typography>
                  </Stack>
                  <Box>
                    <Image src={items?.icon} alt="" />
                  </Box>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Image
                    src={items?.status === "up" ? UpIcon : DownIcon}
                    alt=""
                  />
                  <Typography>
                    <Typography
                      component="span"
                      sx={{
                        color: items?.status === "up" ? "#00B69B" : "#F93C65",
                      }}
                    >
                      {items?.percentage}{" "}
                    </Typography>
                    {items?.status === "up" ? "Up" : "Down"} from past week
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
export default AdminDashboardSection;
