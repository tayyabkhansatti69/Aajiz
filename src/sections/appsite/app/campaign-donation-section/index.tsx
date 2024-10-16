import { Button, Card, Stack, Typography, styled } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import dwatson from "@/src/assets/image/d-watson.png";
import { FormProvider, RHFTextField } from "@/src/components/rhf";
import { UseCampaignDonation } from "./use-campaign-donation";

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
  const { methods, handleSubmit, onSubmit, router } = UseCampaignDonation();
  return (
    <Stack>
      <Button
        variant="text"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mr: "auto" }}
        onClick={() => {
          router.push("donor-dashboard");
        }}
      >
        Back
      </Button>
      <Card sx={{ p: 2 }}>
        <Stack gap={3}>
          <Stack direction="row">
            <Image
              src={dwatson}
              alt="D-Watson"
              style={{ boxShadow: "1", borderRadius: 3, height: "15rem" }}
            />
            <Stack mt="auto" gap={1} width="20rem">
              <BorderLinearProgress variant="determinate" value={50} />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2">Raised - 1M</Typography>
                <Typography variant="subtitle2" color="#0ebdbe">
                  Goal - $1M
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography variant="h5">
            Big Charity: Build school for poor children
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            asperiores doloribus itaque odit beatae est placeat veniam, nam
            corrupti a vitae dolorum dolorem eius voluptatibus aperiam quaerat
            consequuntur? Molestiae cumque nam dicta corrupti inventore id
            excepturi voluptates neque nisi, ullam possimus. Eius aliquam enim
            placeat! Sed cumque nisi possimus. Aliquid neque recusandae atque
            sint repudiandae, eligendi earum animi voluptatum quibusdam minus
            quod laboriosam ratione labore aliquam numquam eveniet amet sunt
            dolor quisquam qui soluta magnam expedita perspiciatis rerum.
            Aspernatur sapiente corrupti, beatae harum qui sunt nesciunt quod
            quaerat labore quisquam dolorum vel, aperiam illo, provident
            perspiciatis distinctio mollitia laboriosam non.
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
            Current Balance: 250000 RS
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
              <RHFTextField
                name="amount"
                fullWidth
                outerLabel="Enter Donation Amount"
                placeholder="Enter Amount"
              />
              <Button
                variant="contained"
                sx={{ width: "fit-content", px: 5, py: 1 }}
                type="submit"
              >
                Donate Now
              </Button>
            </Stack>
          </FormProvider>
        </Stack>
      </Card>
    </Stack>
  );
}
