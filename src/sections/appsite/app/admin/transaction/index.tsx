import { CustomTable } from "@/src/components";
import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Card, Stack, Typography } from "@mui/material";
import { DonorTransactionSection } from "./donor-transaction";
import { PartnerTransactionSection } from "./partner-transaction";

function AdminTransactionSection() {
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Transaction History</Typography>
      <Card sx={{ p: 4 }}>
        <HorizontalTabs tabsArray={["Donor", "Partner"]}>
          <DonorTransactionSection />
          <PartnerTransactionSection />
        </HorizontalTabs>
      </Card>
    </Stack>
  );
}
export default AdminTransactionSection;
