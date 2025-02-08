import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { WithdrawBalanceSection } from "../withdraw-balance-section";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetRecentStampQuery } from "@/src/services/partner/partner-dashboard/partner-dashboard-api";
import { useGetDonorProfileQuery } from "@/src/services/donor/donor-dashboard/donor-dashboard";
import { QRCodeCanvas } from "qrcode.react";

export function PartnerDashboardSection() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const params = { limit: 10, offset: 0 };
  const { data: donorProfile } = useGetDonorProfileQuery({});

  const { data } = useGetRecentStampQuery({ params });
  return (
    <>
      <Stack gap={2.5}>
        <Typography variant="h5">Balance</Typography>
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
              Available Balance
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Withdraw Balance
          </Button>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Recent Scanned Stamp</Typography>
          <Button
            variant="outlined"
            onClick={() => {
              router.push("/scan-stamp");
            }}
          >
            Scan new stamp
          </Button>
        </Stack>
        <Grid container columnSpacing={8} rowSpacing={3}>
          {data?.notifications.map((items) => (
            <Grid item md={6} xs={12} key={items?.id}>
              <Card sx={{ minWidth: 200, background: "#F8FFFE" }}>
                <Stack
                  py={2}
                  px={2}
                  gap={1}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Stack spacing={2}>
                    <Typography variant="subtitle1">
                      <b>Stamp Type:</b> {items?.Card_Type}
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>Card No:</b> {items?.card_num}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="#0ebdbe"
                      fontWeight={600}
                    >
                      Price: {items?.amount} Rs.
                    </Typography>
                  </Stack>
                  <QRCodeCanvas value={items?.card_num} />
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <WithdrawBalanceSection
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}
