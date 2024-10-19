import { Box, Grid, Typography, Button, Link, } from "@mui/material";
import Image from "next/image";
import singPerson from "../../../../assets/signin/singIn.png"; // Your actual image path
import Countdown from 'react-countdown';
import SignInIcon from "@/src/assets/icons/signin-icons/signin-icons";
import OtpInputPage from "./opt-Input";
import { useState } from "react";


function OtpVerificationSection() {
    const [canResend, setCanResend] = useState(false)
    const handleResendOtp = () => {
        setCanResend(false)
    }


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
                <Box width={{ xs: "90%", sm: "80%", md: '80%' }} textAlign="center">
                    <SignInIcon sx={{
                        fontSize: 200,
                        height: 84
                    }} />
                    <Typography variant="h4" gutterBottom>
                        Verify your Account
                    </Typography>
                    <Link
                        href="#"
                        underline="none"
                        color="primary"
                        sx={{ display: "block", marginBottom: "1rem" }}
                    >
                        A 4-Digit verification code has been sent on your email
                    </Link>


                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <OtpInputPage />
                        </Grid>
                        <Grid item xs={12}>
                        <Box mt={3}>
                            <Countdown

                                // key={countdownKey}

                                date={Date.now() + 60000} // Change to adjust countdown time (60 seconds)
                                intervalDelay={0}
                                precision={3}

                                onComplete={() => setCanResend(true)}
                                renderer={({ seconds }) => (
                                    <Typography sx={{ color: 'black', fontFamily: 'Roboto', fontSize: '14px', fontWeight: 400, lineHeight: '16.45px' }}>
                                        {canResend ? (
                                            <Button
                                                variant='text'
                                                onClick={handleResendOtp}
                                                sx={{ textTransform: 'none', color: 'black', fontFamily: 'Roboto', fontSize: '14px', fontWeight: 400, lineHeight: '16.45px' }}
                                            >
                                                Resend : 00:00
                                            </Button>
                                        ) : (
                                            `Resend: 00:${seconds < 10 ? `0${seconds}` : seconds}`
                                        )}
                                    </Typography>
                                )}
                            />
                        </Box>
                        </Grid>
                    </Grid>

                    <Typography variant="body2" fontWeight={600} marginTop="2rem">
                        Back to   <Link href="/sign-in">Login</Link>
                    </Typography>

                </Box>
            </Grid>
        </Grid>
    );
}

export default OtpVerificationSection;
