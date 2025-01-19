import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Card, Stack, Typography } from "@mui/material";
import DonorQueries from "./donor-queries";
import PartnerQueries from "./partner-queries";

function QueriesSection() {
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Queries</Typography>
      <Card sx={{ p: 4 }}>
        <HorizontalTabs tabsArray={["Donor", "Partner"]}>
          <DonorQueries />
          <PartnerQueries />
        </HorizontalTabs>
      </Card>
    </Stack>
  );
}
export default QueriesSection;
