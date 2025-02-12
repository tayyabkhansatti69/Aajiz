import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DonorIcon from "../../../../../assets/donorIcon.png";
import DonationIcon from "../../../../../assets/donationIcon.png";
import PartnerIcon from "../../../../../assets/partnerIcon.png";
import { useGetAdminDashboardDataQuery } from "@/src/services/admin/admin-dashboard/admin-dashboard-api";

function AdminDashboardSection() {
  const { data: dashboardData } = useGetAdminDashboardDataQuery({});
  const data = [
    {
      id: 1,
      title: "Total Donors",
      amount: dashboardData?.body?.total_donor,
      percentage: "8.5%",
      status: "up",
      icon: DonorIcon,
    },
    {
      id: 1,
      title: "Total Donations",
      amount: dashboardData?.body?.total_donation,
      percentage: "1.5%",
      status: "down",
      icon: DonationIcon,
    },
    {
      id: 1,
      title: "Total Earning",
      amount: dashboardData?.body?.total_earning,
      percentage: "4.5%",
      status: "up",
      icon: PartnerIcon,
    },
    {
      id: 1,
      title: "Total Partners",
      amount: dashboardData?.body?.total_partner,
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
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Card sx={{ px: 2, py: 3 }}></Card>
    </Stack>
  );
}
export default AdminDashboardSection;
