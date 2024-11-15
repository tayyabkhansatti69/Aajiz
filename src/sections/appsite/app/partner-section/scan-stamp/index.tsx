import { Box, Button, Card, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { UseScanStamp } from "./use-scan-stamp";
import {
  FormProvider,
  RHFCustomSelect,
  RHFTextField,
} from "@/src/components/rhf";
import Image from "next/image";
import scanStamp from "../../../../../assets/gif/scanStamp.gif";

export function ScanStampSection() {
  const { methods, handleSubmit, onSubmit, router } = UseScanStamp();
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
          Scan Stamp
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack
            direction="row"
            justifyContent={{ lg: "space-between", xs: "" }}
            gap={5}
          >
            <Stack width={{ lg: "40%", xs: "100%" }} spacing={4}>
              <RHFCustomSelect
                name="stampType"
                outerLabel="Select Stamp Type"
                options={[
                  { id: 1, value: "eStamp", label: "E-Stamp" },
                  { id: 2, value: "physicalCard", label: "Physical Card" },
                ]}
                fullWidth
              />
              <RHFTextField name="cardNumber" outerLabel="Scan QR Code" />
              <RHFTextField name="amount" outerLabel="Amount To Deduct" />

              <Button type="submit" variant="contained" sx={{ width: "50%" }}>
                Scan Stamp
              </Button>
            </Stack>
            <Box sx={{ display: { lg: "block", xs: "none" } }}>
              <Image
                src={scanStamp}
                alt=""
                style={{ width: "80%", height: "80%", margin: "auto" }}
              />
            </Box>
          </Stack>
        </FormProvider>
      </Card>
    </Stack>
  );
}
