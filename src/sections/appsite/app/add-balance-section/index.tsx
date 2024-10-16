import { Button, Card, Divider, Stack, Typography } from "@mui/material";
import { UseAddBalance } from "./use-add-balance";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { FormProvider, RHFTextField } from "@/src/components/rhf";

export function AddBalanceSection() {
  const { methods, handleSubmit, onSubmit, router } = UseAddBalance();
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
        <Typography variant="h5" sx={{ mb: 3 }}>
          Your Cart
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={20}>
          <Stack width="50%" gap={2}>
            <Typography variant="h6">Payment Method</Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={5}>
                <RHFTextField
                  name="ibnNumber"
                  outerLabel="Account Number or IBAN"
                />
                <RHFTextField
                  name="accountHolderName"
                  outerLabel="Account Holder Name"
                />
                <RHFTextField name="bankName" outerLabel="Bank Name" />
                <Button type="submit" variant="contained" sx={{ width: "50%" }}>
                  Pay
                </Button>
              </Stack>
            </FormProvider>
          </Stack>
          <Card sx={{ p: 2, width: "60%", height: "fit-content" }}>
            <Stack gap={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight={500}>Your Stamp Amount</Typography>
                <Typography>5000 Rs.</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight={500}>Stamp Type</Typography>
                <Typography>Physical</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight={600}>Total</Typography>
                <Typography color="#0EBDBE" fontWeight={600}>
                  5000 Rs.
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Card>
    </Stack>
  );
}
