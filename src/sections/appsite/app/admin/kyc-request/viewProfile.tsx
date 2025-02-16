import { FormProvider, RHFTextField } from "@/src/components/rhf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import VerifiedIcon from "@mui/icons-material/Verified";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Grid2 as Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { UseViewProfile } from "./useViewProfile";
import { useApproveKYCMutation } from "@/src/services/admin/kyc-requests/kyc-requests-api";
import toast from "react-hot-toast";

export function ViewProfileSection() {
  const { methods, handleSubmit, onSubmit, isLoading, data, back, id } =
    UseViewProfile();
  const [approveKyc] = useApproveKYCMutation();
  const onSubmitKyc = async (approve: any): Promise<void> => {
    const body = {
      id,
      approve,
    };

    try {
      const res: any = await approveKyc(body).unwrap();
      back();
      toast.success(res?.message ?? `KYC Status Update Successfully!`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      toast.error(errMsg ?? "Something Went Wrong!");
    }
  };
  return (
    <Stack>
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
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 100, height: 100 }} />
            <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  backgroundColor: "#e2f7f7",
                  textAlign: "center",
                  px: 3,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                Status
              </Typography>
              <Typography variant="h6">{data?.body?.name}</Typography>
              <Typography>{data?.body?.account_type}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#0EBDBE",
                width: "fit-content",
                height: "fit-content",
                ":hover": {
                  color: "white",
                  backgroundColor: "#0EBDBE",
                },
              }}
              onClick={() => {
                onSubmitKyc(true);
              }}
            >
              <DoneIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#F36F56",
                width: "fit-content",
                height: "fit-content",
                ":hover": {
                  color: "white",
                  backgroundColor: "#F36F56",
                },
              }}
              onClick={() => {
                onSubmitKyc(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Typography sx={{ px: 10, my: 2 }}>
          {data?.body?.description}
        </Typography>
        <Grid container rowGap={3}>
          <Grid size={{ lg: 3, md: 6, xs: 12 }}>
            <Stack rowGap={0.5}>
              <Typography fontWeight={600} fontSize="14px">
                Contact Number
              </Typography>
              <Chip
                label={
                  <Stack direction="row" alignItems={"center"}>
                    {data?.body?.number_verify ? (
                      <VerifiedIcon
                        sx={{
                          color: "primary.main",
                          width: "18px",
                          height: "18px",
                          mr: 1,
                        }}
                      />
                    ) : null}
                    <Typography fontWeight={400} fontSize="14px">
                      {data?.body?.contact_num}
                    </Typography>
                  </Stack>
                }
                sx={{ borderRadius: 1, width: "fit-content" }}
              />
            </Stack>
          </Grid>
          <Grid size={{ lg: 3, md: 6, xs: 12 }}>
            <Stack rowGap={0.5}>
              <Typography fontWeight={600} fontSize="14px">
                Business Type
              </Typography>
              <Chip
                label={
                  <Typography fontWeight={400} fontSize="14px">
                    {data?.body?.contact_num}
                  </Typography>
                }
                sx={{ borderRadius: 1, width: "fit-content" }}
              />
            </Stack>
          </Grid>
          <Grid size={{ lg: 3, md: 6, xs: 12 }}>
            <Stack rowGap={0.5}>
              <Typography fontWeight={600} fontSize="14px">
                Address
              </Typography>
              <Chip
                label={
                  <Typography fontWeight={400} fontSize="14px">
                    {data?.body?.contact_num}
                  </Typography>
                }
                sx={{ borderRadius: 1, width: "fit-content" }}
              />
            </Stack>
          </Grid>
          <Grid size={{ lg: 3, md: 6, xs: 12 }}>
            <Stack rowGap={0.5}>
              <Typography fontWeight={600} fontSize="14px">
                Email
              </Typography>
              <Chip
                label={
                  <Stack direction="row" alignItems={"center"}>
                    {data?.body?.email_verify ? (
                      <VerifiedIcon
                        sx={{
                          color: "primary.main",
                          width: "18px",
                          height: "18px",
                          mr: 1,
                        }}
                      />
                    ) : null}
                    <Typography fontWeight={400} fontSize="14px">
                      {data?.body?.email}
                    </Typography>
                  </Stack>
                }
                sx={{ borderRadius: 1, width: "fit-content" }}
              />
            </Stack>
          </Grid>
          <Grid size={12}>
            <Typography variant="h5">KYC Details</Typography>
          </Grid>
          {data?.body?.ntn ? (
            <Grid size={{ lg: 3, md: 6, xs: 12 }}>
              <Stack rowGap={0.5}>
                <Typography fontWeight={600} fontSize="14px">
                  Company NTN Number
                </Typography>
                <Chip
                  label={
                    <Typography fontWeight={400} fontSize="14px">
                      {data?.body?.ntn}
                    </Typography>
                  }
                  sx={{ borderRadius: 1, width: "fit-content" }}
                />
              </Stack>
            </Grid>
          ) : null}
          {data?.body?.business_name ? (
            <Grid size={{ lg: 3, md: 6, xs: 12 }}>
              <Stack rowGap={0.5}>
                <Typography fontWeight={600} fontSize="14px">
                  Company Registered Name
                </Typography>
                <Chip
                  label={
                    <Typography fontWeight={400} fontSize="14px">
                      {data?.body?.business_name}
                    </Typography>
                  }
                  sx={{ borderRadius: 1, width: "fit-content" }}
                />
              </Stack>
            </Grid>
          ) : null}
        </Grid>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack rowGap={2} sx={{ width: { md: "50%", xs: "100%" } }}>
            <Typography variant="h5" sx={{ my: 2 }}>
              Send a Query
            </Typography>
            <RHFTextField name="subject" outerLabel="Subject" />
            <RHFTextField name="reason" outerLabel="Reason" />

            <RHFTextField
              name="description"
              outerLabel="Description"
              multiline
              rows={5}
            />

            <LoadingButton
              loading={isLoading}
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Submit
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Card>
    </Stack>
  );
}
