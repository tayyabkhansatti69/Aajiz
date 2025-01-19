import HorizontalTabs from "@/src/components/Horizontal-tab";
import { Card, Stack, Typography } from "@mui/material";
import Campaign from "./campaigns";

function CreateCampaignSection() {
  return (
    <Stack rowGap={2}>
      <Typography variant="h5">Campaign</Typography>
      <Card sx={{ p: 4 }}>
        <HorizontalTabs tabsArray={["Create Campaign", "Campaigns"]}>
          <>kjhaskjda</>
          <Campaign />
        </HorizontalTabs>
      </Card>
    </Stack>
  );
}
export default CreateCampaignSection;
