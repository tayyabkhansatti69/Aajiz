
import { FormProvider, RHFTextField } from "@/src/components/rhf";
import { Box, Button, Grid, Stack, } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import ProfileUpdate from "./profile-update";

function SettingSection() {
    const methods = useForm({
        defaultValues: {},
    });
    const { handleSubmit } = methods;
    const onSubmit = () => { };
    return (
        <div>

            <Stack mt={2} p={2} gap={2}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
                    <ProfileUpdate />
                    <Box display={'flex'} flexDirection={'column'} gap={2}>
                        <Button variant="outlined" sx={{minWidth:'213px'}}> Edit Card</Button>
                        <Button variant="contained" sx={{minWidth:'213px'}}> Order Card</Button>
                    </Box>
                </Box>
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container>
                        <Grid xs={12} sm={6} p={1} item>
                            <RHFTextField
                                type="text"
                                label="Full Name"
                                fullWidth
                                name="fullName"
                                placeholder="Enter Full Name Here"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} p={1} item>
                            <RHFTextField
                                type="email"
                                label="Email"
                                fullWidth
                                name="email"
                                placeholder="Enter Email Here"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} p={1} item>
                            <RHFTextField
                                type="text"
                                label="Old Password"
                                fullWidth
                                name="oldPassword"
                                placeholder="Enter Old Password Here"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} p={1} item>
                            <RHFTextField
                                type="text"
                                label="New Password"
                                fullWidth
                                name="newPassword"
                                placeholder="Enter New Password Here"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} p={1} item>
                            <RHFTextField
                                label="Contact Number"
                                fullWidth
                                name="contactNumber"
                                placeholder="Enter Contct Number"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} p={1} item>
                            <RHFTextField
                                type="text"
                                label="Address"
                                fullWidth
                                name="address"
                                placeholder="Enter Your Address"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} p={1} item>
                            <RHFTextField
                                type="text"
                                label="Description"
                                fullWidth
                                name="description"
                                multiline
                                rows={4}
                                placeholder="Enter Your Description"
                            />
                        </Grid>
                        <Grid xs={12} sm={12} p={1} item>
                            <Stack direction="row" justifyContent="start" >

                                <Button
                                    variant="contained"
                                    type="submit"
                                    size="small"
                                    sx={{
                                        minWidth: 300,
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

export default SettingSection;
