import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Card, Stack, Typography } from "@mui/material";
import DonorKYCRequests from "./donor-kyc";
import PartnerKYCRequests from "./partner-kyc";
import CancelKYCRequests from "./cancel-kyc";

function KycRequestSection() {
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">KYC Requests</Typography>
      <Card sx={{ p: 4 }}>
        <HorizontalTabs tabsArray={["Donor", "Partner", "Cancel KYC"]}>
          <DonorKYCRequests />
          <PartnerKYCRequests />
          <CancelKYCRequests />
        </HorizontalTabs>
      </Card>
    </Stack>
  );
}

export default KycRequestSection;
