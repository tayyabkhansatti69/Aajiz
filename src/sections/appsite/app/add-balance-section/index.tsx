import {
  FormProvider,
  RHFCustomSelect,
  RHFDatePicker,
  RHFTextField,
} from "@/src/components/rhf";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import addBalanceLogo from "../../../../assets/image/addBalanceLogo.png";
import { UseAddBalance } from "./use-add-balance";

export function AddBalanceSection() {
  const { methods, handleSubmit, onSubmit, router, paymentMethodType } =
    UseAddBalance();
  return (
    <Stack>
      <Button
        variant="text"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mr: "auto" }}
        onClick={() => {
          router.push("dashboard");
        }}
      >
        Back
      </Button>
      <Card sx={{ p: 2 }}>
        <Stack
          direction={{ lg: "row", xs: "column-reverse" }}
          justifyContent="space-between"
          gap={{ lg: 20, xs: 5 }}
        >
          <Stack width={{ lg: "40%", xs: "100%" }} gap={2}>
            <Typography variant="h6">Payment Method</Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={5}>
                <RHFCustomSelect
                  name="paymentMethod"
                  outerLabel="Select Payment Method"
                  options={[
                    { id: 1, label: "Credit/Debit Card", value: "card" },
                    { id: 2, label: "JazzCash", value: "jazzCash" },
                    { id: 3, label: "Easypaisa", value: "easypaisa" },
                  ]}
                />
                <RHFTextField name="amount" outerLabel="Amount" />
                {paymentMethodType === "card" ? (
                  <>
                    <RHFTextField name="cardNumber" outerLabel="Card Number" />
                    <RHFTextField name="cvc" outerLabel="CVC number" />
                    <RHFDatePicker name="expireDate" outerLabel="Expire Date" />
                  </>
                ) : (
                  <>
                    <RHFTextField name="cnic" outerLabel="CNIC Number" />
                    <RHFTextField
                      name="phoneNumber"
                      outerLabel="Phone Number"
                    />
                  </>
                )}

                <Button type="submit" variant="contained" sx={{ width: "50%" }}>
                  Pay
                </Button>
              </Stack>
            </FormProvider>
          </Stack>
          <Card
            sx={{
              p: 2,
              width: { lg: "40%", xs: "100%" },
              height: "fit-content",
              borderRadius: 2,
            }}
          >
            <Stack gap={2} textAlign="center">
              <Box>
                <Image src={addBalanceLogo} alt="Logo" />
              </Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight={600}>Total Payment</Typography>
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
