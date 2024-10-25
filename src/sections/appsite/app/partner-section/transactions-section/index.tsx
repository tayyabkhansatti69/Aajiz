import { Card, Stack, Typography } from "@mui/material";

export function TransactionSection() {
  return (
    <Stack>
      <Typography variant="h5" fontWeight={600} sx={{ my: 1 }}>
        Add Account
      </Typography>
      <Card sx={{ px: 4, py: 2 }}></Card>
    </Stack>
  );
}
