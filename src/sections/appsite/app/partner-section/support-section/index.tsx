import { Card, Stack, Typography } from "@mui/material";

export function SupportSection() {
  return (
    <Stack>
      <Typography variant="h5" fontWeight={600} sx={{ my: 1 }}>
        Support
      </Typography>
      <Card sx={{ px: 4, py: 2 }}></Card>
    </Stack>
  );
}
