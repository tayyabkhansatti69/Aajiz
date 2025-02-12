import { FormProvider, RHFTextField } from "@/src/components/rhf";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileUpdate from "./profile-update";
import {
  useEditPasswordMutation,
  useEditProfileMutation,
  useGetDonorProfileQuery,
} from "@/src/services/donor/setting/setting-api";
import * as Yup from "yup";
import toast from "react-hot-toast";


export const Schema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  contact_num: Yup.string().required("Contact number is required"),
  description: Yup.string().required("Description is required"),
  email: Yup.string().required("Email is required"),
  name: Yup.string().required("Name is required"),
});

function PartnerSettingSection() {
  const { data: profileData } = useGetDonorProfileQuery({},{refetchOnMountOrArgChange:true});
  const [enable, setEnable] = useState(true);

  const [editProfile] = useEditProfileMutation();
  const [editPassword] = useEditPasswordMutation();
  const methods = useForm({
    defaultValues: {
      address: profileData?.body?.address,
      name: profileData?.body?.name,
      description: profileData?.body?.description,
      contact_num: profileData?.body?.contact_num,
      email: profileData?.body?.email,
    },
  });
  const methods2 = useForm({
    defaultValues: {
      current_password: "",
      password: "",
    },
  });
  const { handleSubmit: handleSubmit2 } = methods2;
  const { handleSubmit, setValue } = methods;
const [image,setImage]=useState(null)

  useEffect(() => {
    if (profileData?.body) {
      setValue("name", profileData?.body?.name);
      setValue("description", profileData?.body?.description);
      setValue("contact_num", profileData?.body?.contact_num);
      setValue("email", profileData?.body?.email);
      setValue("address", profileData?.body?.address);
      setImage(profileData?.body?.profile_image)
    }
  }, [profileData, setValue]);

  async function onSubmit(data: any): Promise<any> {
    const { name, email, description, address, contact_num } = data;
    const body = { name, email, description, address, contact_num };

    try {
      const response = await editProfile(body).unwrap();
      setEnable(true);
      toast.success(response?.message || "Profile updated successfully!");
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong!");
    }
  }

  async function onSubmit2(data: any): Promise<any> {
    const { current_password, password } = data;
    const body = { current_password, password };

    try {
      const response = await editPassword(body).unwrap();
      setEnable(true);
      toast.success(response?.message || "Password updated successfully!");
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong!");
    }
  }

  return (
    <div>
      <Stack mt={2} p={2} gap={2}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <ProfileUpdate profile_image={image} />
          <Box display="flex" flexDirection="column" gap={2}>
            <Button
              variant="outlined"
              sx={{ minWidth: "213px" }}
              onClick={() => setEnable(false)}
            >
              Edit Profile
            </Button>
          
          </Box>
        </Box>

        {/* Profile Form */}
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                disabled={enable}
                outerLabel="Full Name"
                fullWidth
                name="name"
                placeholder="Enter Full Name Here"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                disabled={enable}
                outerLabel="Email"
                fullWidth
                name="email"
                placeholder="Enter Email Here"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                disabled={enable}
                outerLabel="Contact Number"
                fullWidth
                name="contact_num"
                placeholder="Enter Contact Number Here"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                disabled={enable}
                outerLabel="Address"
                fullWidth
                name="address"
                placeholder="Enter Your Address"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                disabled={enable}
                outerLabel="Description"
                fullWidth
                name="description"
                multiline
                rows={4}
                placeholder="Enter Your Description"
              />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
              <Stack direction="row" justifyContent="start">
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  disabled={enable}
                  sx={{ minWidth: 300 }}
                >
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>

        {/* Password Update Form */}
        <FormProvider methods={methods2} onSubmit={handleSubmit2(onSubmit2)}>
          <Grid container>
            <Grid xs={12} sm={6} p={1} item>
              <Typography variant="body1" fontWeight="bold">
                Update Password
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} p={1} item />
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                type="password"
                disabled={enable}
                outerLabel="Old Password"
                fullWidth
                name="current_password"
                placeholder="Enter Old Password Here"
              />
            </Grid>
            <Grid xs={12} sm={6} p={1} item />
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                type="password"
                disabled={enable}
                outerLabel="New Password"
                fullWidth
                name="password"
                placeholder="Enter New Password Here"
              />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
              <Stack direction="row" justifyContent="start">
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  disabled={enable}
                  sx={{ minWidth: 300 }}
                >
                  Update Password
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </Stack>
    
    </div>
  );
}

export default PartnerSettingSection;
