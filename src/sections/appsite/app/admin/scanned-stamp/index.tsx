import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Card, Stack, Typography } from "@mui/material";
import DonorScannedStamps from "./donor-scanned-stamps";
import PartnerScannedStamps from "./partner-scanned-stamps";

function ScannedStampSection() {
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Recent Donations</Typography>
      <Card sx={{ p: 4 }}>
        <HorizontalTabs tabsArray={["Donor", "Partner"]}>
          <DonorScannedStamps />
          <PartnerScannedStamps />
        </HorizontalTabs>
      </Card>
    </Stack>
  );
}
export default ScannedStampSection;
