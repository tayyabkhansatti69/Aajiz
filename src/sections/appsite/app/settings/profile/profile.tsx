// import { ProfileHeader } from "@/components/my-profile";
// import {
//   FormProvider,
//   RHFSelect,
//   RHFTelInput,
//   RHFTextField,
// } from "@/components/rhf";
import { ProfileHeader } from "@/src/components/my-profile";
import { FormProvider, RHFSelect, RHFTelInput, RHFTextField } from "@/src/components/rhf";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function ProfileSection() {
  const methods = useForm({
    defaultValues: {},
  });
  const { handleSubmit } = methods;
  const onSubmit = () => {};
  return (
    <div>
      <ProfileHeader data={{ firstName: "danny", lastName: "one" }} />
      <Stack mt={2} p={2} gap={2}>
        <Typography variant="body1" color="initial" fontWeight={600}>
          Personal
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                type="text"
                label="First Name"
                fullWidth
                name="First Name"
                placeholder="Enter Email Here"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                type="text"
                label="last Name"
                fullWidth
                name="last Name"
                placeholder="Enter Email Here"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                type="text"
                label="Email "
                fullWidth
                name="last Name"
                placeholder="Enter Email Here"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTelInput
                label="Phone *"
                fullWidth
                name="Phone"
                placeholder="+xx xxxx xxxx"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFSelect
                label="Major *"
                fullWidth
                name="major"
                placeholder="Enter Email "
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                type="text"
                label="Age *"
                fullWidth
                name="age"
                placeholder="Enter Age "
              />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
              <Stack direction="row" justifyContent="end" spacing={2}>
                <Button
                  sx={{ borderRadius: 30, minWidth: 100 }}
                  variant="contained"
                  size="small"
                 
                >
                  Back
                </Button>

                <Button
                  variant="outlined"
                  type="submit"
                  size="small"
                  sx={{
                    borderRadius: 30,
                    minWidth: 100,
                    color: "primary.main",
                  }}
                >
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </Stack>
    </div>
  );
}

export default ProfileSection;
