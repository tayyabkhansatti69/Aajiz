import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { UseDonateNow } from "./use-donate-now";
import {
  FormProvider,
  RHFCustomSelect,
  RHFTextField,
} from "@/src/components/rhf";

export function DonateNowSection() {
  const { methods, handleSubmit, onSubmit, router } = UseDonateNow();
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
      <Card sx={{ p: 4 }}>
        <Stack gap={1}>
          <Typography variant="body1" fontWeight={600}>
            E-Stamp Limit
          </Typography>
          <Typography variant="body2">100 Rs.</Typography>
        </Stack>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} sx={{ mt: 1 }}>
            <Grid item md={4}>
              <RHFTextField
                name="stampAmount"
                outerLabel="Stamp Amount"
                fullWidth
              />
            </Grid>
            <Grid item md={4}>
              <RHFCustomSelect
                name="stampType"
                outerLabel="Select Stamp Type"
                options={[
                  { id: 1, name: "1", label: "1" },
                  { id: 2, name: "2", label: "2" },
                ]}
                fullWidth
              />
            </Grid>
            <Grid item md={4}>
              <RHFCustomSelect
                name="industryType"
                outerLabel="Select Industry Type"
                options={[
                  { id: 1, name: "1", label: "1" },
                  { id: 2, name: "2", label: "2" },
                ]}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontWeight={700}>Total</Typography>
              <Typography fontWeight={500}>5000 Rs</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ px: 10, py: 1 }}>
                Proceed
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </Stack>
  );
}
