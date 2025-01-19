import { Box, Typography } from "@mui/material";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      p={4}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ background: "pink" }}
    >
      <Typography variant="h2">Thanks</Typography>
      <br />
      <Typography variant="h2">Your Amount </Typography>
      <Typography variant="h3">{amount}</Typography>
    </Box>
  );
}
