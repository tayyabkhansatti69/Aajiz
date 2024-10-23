import { Box, Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import { trustedPartnersData } from "../../donor-dashboard-section/donor-dashboard-data";
import { WithdrawBalanceSection } from "../withdraw-balance-section";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function PartnerDashboardSection() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <Stack gap={2.5}>
        <Typography variant="h5">My Balance</Typography>
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
              Rs. 5000
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
                  sx={{ height: "15rem" }}
                />
                <Stack py={1} px={2} gap={1}>
                  <Typography fontWeight={600}>{items?.name}</Typography>
                  <Typography variant="subtitle1">
                    Stamp Type: Physical
                  </Typography>

                  <Typography variant="subtitle1" color="#0ebdbe">
                    Price: 25000 Rs.
                  </Typography>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>
      <WithdrawBalanceSection
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}
