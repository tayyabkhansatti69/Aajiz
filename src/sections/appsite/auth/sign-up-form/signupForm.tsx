import { Box, Grid, Typography, Link, InputAdornment, IconButton } from "@mui/material";
import Image from "next/image";
import singPerson from "../../../../assets/signin/singIn.png"; // Your actual image path

import { FormProvider, RHFCheckbox, RHFRadioGroup, RHFTextField } from "@/src/components/rhf";
import SignInIcon from "@/src/assets/icons/signin-icons/signin-icons";
import { UseSignUpForm } from "./useSignUpForm";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from "@mui/lab";


function SignUpForm() {


    const { methods, handleSubmit, onSubmit, handleClickShowPassword,
        showPassword,isLoading,handleClickShowPassword1,
        showPassword1 } = UseSignUpForm()

    return (
        <Grid
            container
            sx={{
                height: "100vh", // Full height of the viewport
                width: "100vw", // Full width of the viewport
                overflow: "hidden", // Hide any overflow to prevent scrolling
            }}
        >
            {/* Left side image (hidden on xs and sm screens) */}
            <Grid
                item
                xs={0}
                sm={0}
                md={6}
                sx={{
                    height: "100%",
                    display: { xs: "none", sm: "none", md: "block" }, // Image hidden on xs and sm
                }}
            >
                <Box
                    position="relative" // Use relative positioning for Image with layout="fill"
                    width="100%"
                    height="100vh"
                >
                    <Image
                        src={singPerson}
                        alt="signin"
                        quality={100}
                        priority={true}
                        layout="fill" // Ensure the image fills the container
                    // objectFit="cover" // Ensure the image covers the container without cropping
                    />
                </Box>
            </Grid>

            {/* Right side form */}
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100%" }}
            >
                <Box width={{ xs: "90%", sm: "80%", md: '70%' }} textAlign="center">
                    <SignInIcon sx={{
                        fontSize: 70,
                        height: 54
                    }} />
                    <Typography variant="h6" gutterBottom>
                        Create your Account
                    </Typography>
                    <Link
                        href="#"
                        underline="none"
                        color="primary"

                        sx={{ display: "block", marginBottom: "1rem",fontSize:'1.4rem' }}
                    >
                        Submit your data for Sign up
                    </Link>

                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1.22}>
                            <Grid item xs={12} md={12}>
                                <RHFTextField
                                    name="name"
                                    fullWidth
                                    label="Full Name"

                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <RHFTextField
                                    name="email"
                                    fullWidth
                                    label="Email"

                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <RHFTextField
                                    name="password"
                                    fullWidth
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <RHFTextField
                                    name="confirmPassword"
                                    fullWidth
                                    label="Confirm Password"
                                    type={showPassword1 ? 'text' : 'password'} // Toggle between text and password
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword1}
                                                    edge="end"
                                                >
                                                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <RHFRadioGroup
                                size="small"
                                    name="account_type"
                                    options={[
                                        { label: 'Donor', value: 'donor' },
                                        { label: 'Partner', value: 'partner' },
                                    ]}
                                />
                            </Grid>
                            <Grid xs={12} md={12} alignItems={'flex-start'} display={'flex'} ml='1rem' mb={0}>
                                <RHFCheckbox name="remberMe" label="I agree to Terms & Conditions and Privacy Policy" style={{fontSize:'1rem'}} />
                            </Grid>
                        </Grid>


                        <LoadingButton variant="contained" type="submit" fullWidth color="primary" loading={isLoading}>
                            Create Account
                        </LoadingButton>

                        <Typography variant="subtitle2" fontWeight={600} marginTop="0.8rem">
                            I have an account?  <Link href="/sign-in">Login</Link>
                        </Typography>
                    </FormProvider>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignUpForm;
