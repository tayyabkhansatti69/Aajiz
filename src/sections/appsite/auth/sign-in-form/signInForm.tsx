import { Box, Grid, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import singPerson from "../../../../assets/signin/singIn.png"; // Your actual image path
import { UseSignInForm } from "./useSignInForm";
import { FormProvider, RHFTextField } from "@/src/components/rhf";
import SignInIcon from "@/src/assets/icons/signin-icons/signin-icons";



function SignInForm() {


    const { methods, handleSubmit, onSubmit } = UseSignInForm()

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
                <Box width={{ xs: "90%", sm: "80%" ,md:'70%' }} textAlign="center">
                    <SignInIcon sx={{
                        fontSize: 200,
                        height: 84
                    }} />
                    <Typography variant="h4" gutterBottom>
                        Welcome Back to Aajiz!
                    </Typography>
                    <Link
                        href="#"
                        underline="none"
                        color="primary"
                        sx={{ display: "block", marginBottom: "1rem" }}
                    >
                        Sign in to your account
                    </Link>

                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
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
                                variant="outlined"
                                fullWidth
                                label="Password"
                            />
                        </Grid>
                        </Grid>
                        <Link
                            href="/forgot-password"
                            underline="none"
                            color="#001213"
                            sx={{ display: "flex", marginBottom: "3rem",marginTop:'1rem',alignItems:'start',fontWeight:500,fontSize:16 }}
                        >
                            Forgot password?
                        </Link>

                        <Button variant="contained" type="submit" fullWidth color="primary">
                            Sign in
                        </Button>

                        <Typography variant="body2"  fontWeight={600} marginTop="2rem">
                            Have an account already? <Link href="#">Sign Up</Link>
                        </Typography>
                    </FormProvider>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignInForm;
