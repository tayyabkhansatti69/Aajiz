import { Button, Card, Skeleton, Stack, Typography, styled } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { FormProvider, RHFTextField } from "@/src/components/rhf";
import { UseCampaignDonation } from "./use-campaign-donation";
import { LoadingButton } from "@mui/lab";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#0EBDBE",
    ...theme.applyStyles("dark", {
      backgroundColor: "#0EBDBE",
    }),
  },
}));
export function CampaignDonationSection() {
  const { methods, handleSubmit, onSubmit, router,campaignData,donorProfile,isLoading,donorDataLoading } = UseCampaignDonation();
  return (
    <Stack>
      <Button
        variant="text"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mr: "auto" }}
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Back
      </Button>
      {donorDataLoading ? (<Stack>
      <Stack direction="row" justifyContent="space-between" width={'50%'} gap={2}>
        <Skeleton width={180} height={150} />
        <Skeleton width={100} height={10} />
      </Stack>
      <Skeleton width={'100%'} height={20} />
      <Skeleton width={'100%'} height={200} />
      <Skeleton width={220} height={100} />
      
      <Skeleton width={"100%"} height={200} />
    </Stack>):(
      <Card sx={{ p: 2 }}>
        <Stack gap={3}>
          <Stack direction="row" gap={2}>
            <Image
              src={campaignData?.image_video}
              width={180}
              height={150}
              alt="D-Watson"
              style={{ boxShadow: "1", borderRadius: 3, height: "15rem" }}
            />
            <Stack mt="auto" gap={1} width="20rem">
              <BorderLinearProgress variant="determinate" value={ campaignData?.donation_goal && campaignData?.donation_goal > 0
                        ? (campaignData.complete_goal / campaignData.donation_goal) * 100
                        : 0} />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2">Raised - 1M</Typography>
                <Typography variant="subtitle2" color="#0ebdbe">
                  Goal - ${campaignData?.donation_goal}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography variant="h5">
            {campaignData?.campaign_title}
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            {campaignData?.campaign_description}
          </Typography>
          <Typography
            sx={{
              px: 5,
              py: 2,
              border: "1px solid #0EBDBE",
              borderRadius: 1,
              color: "#0EBDBE",
              fontWeight: 500,
              width: "fit-content",
            }}
          >
            Current Balance: {donorProfile?.body?.current_balance ?? donorProfile?.body?.balance} RS
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
              <RHFTextField
                name="amount"
                fullWidth
                outerLabel="Enter Donation Amount"
                placeholder="Enter Amount"
              />
              <LoadingButton
                variant="contained"
                sx={{ width: "fit-content", px: 5, py: 1 }}
                type="submit"
                loading={isLoading}
              >
                Donate Now
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Stack>
      </Card>
      ) }
    </Stack>
  );
}
