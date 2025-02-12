import HorizontalTabs from "@/src/components/Horizontal-tab";
import {
  // Box,
  Grid,
  Paper
} from "@mui/material";
import { StampTransactionSection } from "./stamp-transaction";
import { WithdrawTransactionSection } from "./withdraw-transaction";
function TransactionSection() {
  return (
    <Grid pt={2} container>
      <Grid xs={12} item>
        <Paper variant="elevation" elevation={2}>
          <HorizontalTabs tabsArray={["Stamp Transactions", "Withdrawals"]}>
            <StampTransactionSection />
            <WithdrawTransactionSection />
          </HorizontalTabs>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TransactionSection;
