import { Button, Card, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { QRCodeCanvas } from "qrcode.react";

function ViewScanned() {
  const { back } = useRouter();
  return (
    <Stack rowGap={2}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          back();
        }}
        sx={{ mr: "auto", color: "black" }}
      >
        Back
      </Button>
      <Card sx={{ p: 4 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5">Stamp Details</Typography>
          <Typography variant="body2" fontWeight={600}>
            Scan Time :
            <Typography variant="subtitle2" component="span">
              Date
            </Typography>
          </Typography>
        </Stack>
        <Card
          sx={{
            p: 3,
            backgroundColor: "primary.light",
            width: "fit-content",
          }}
        >
          <Stack direction="row" columnGap={4}>
            <Stack rowGap={2}>
              <Typography variant="body1" fontWeight={600}>
                Stamp Type:
                <Typography variant="subtitle1" component="span">
                  Physical
                </Typography>
              </Typography>

              <Typography variant="body1" fontWeight={600}>
                Card No:
                <Typography variant="subtitle1" component="span">
                  5121754
                </Typography>
              </Typography>

              <Typography variant="body1" fontWeight={600} color="primary.main">
                Price:
                <Typography variant="subtitle1" component="span">
                  1000 Rs.
                </Typography>
              </Typography>
            </Stack>
            <Stack>
              <QRCodeCanvas value={"1"} />
            </Stack>
          </Stack>
        </Card>
      </Card>
    </Stack>
  );
}
export default ViewScanned;
