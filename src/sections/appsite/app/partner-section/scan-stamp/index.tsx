import { Button, Card, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { UseScanStamp } from "./use-scan-stamp";
import {
  FormProvider,
  RHFCustomSelect,
  RHFTextField,
} from "@/src/components/rhf";

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
          <Stack width="40%" spacing={4}>
            <RHFCustomSelect
              name="stampType"
              outerLabel="Select Stamp Type"
              options={[
                { id: 1, name: "eStamp", label: "E Stamp" },
                { id: 2, name: "physicalCard", label: "Physical Card" },
              ]}
            />
            <RHFTextField name="scanQrCode" outerLabel="Scan QR Code" />
            <Button type="submit" variant="contained" sx={{ width: "50%" }}>
              Scan Stamp
            </Button>
          </Stack>
        </FormProvider>
      </Card>
    </Stack>
  );
}
