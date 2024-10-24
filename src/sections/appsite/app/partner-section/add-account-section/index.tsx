import { Button, Card, Stack, Typography } from "@mui/material";
import { UseAddAccount } from "./use-add-account";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  FormProvider,
  RHFCustomSelect,
  RHFTextField,
} from "@/src/components/rhf";

export function AddAccountSection() {
  const { methods, handleSubmit, onSubmit, router, paymentOption } =
    UseAddAccount();
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
      <Card sx={{ px: 4, py: 2 }}>
        <Typography variant="h6" fontWeight={600} sx={{ my: 1 }}>
          Add Account
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack width="40%" spacing={4}>
            <RHFCustomSelect
              name="paymentOption"
              outerLabel="Select Payment Option"
              options={[
                { id: 1, value: "bank", label: "Bank Account" },
                { id: 2, value: "easypaisa", label: "Easypaisa" },
                { id: 3, value: "jazzcash", label: "Jazzcash" },
              ]}
            />
            <RHFTextField name="accountTitle" outerLabel="Account Title" />
            {paymentOption === "bank" ? (
              <>
                <RHFTextField name="bank" outerLabel="Bank Name" />
                <RHFTextField
                  name="bankAccountNumber"
                  outerLabel="Bank Account Number"
                />
              </>
            ) : (
              <>
                <RHFTextField name="phoneNumber" outerLabel="Account Number" />
              </>
            )}

            <Button type="submit" variant="contained" sx={{ width: "50%" }}>
              Add Account
            </Button>
          </Stack>
        </FormProvider>
      </Card>
    </Stack>
  );
}
