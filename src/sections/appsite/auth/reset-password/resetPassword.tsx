import {
  Box,
  Grid,
  Typography,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Image from "next/image";
// Your actual image path
import forgetPaswword from "../../../../assets/signin/forget.png";
import { FormProvider, RHFTextField } from "@/src/components/rhf";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { UseRegisterForm } from "./useResetPassword";
import SignInIcon from "@/src/assets/icons/signin-icons/signin-icons";

function ResetPassword() {
  const {
    methods,
    handleSubmit,
    onSubmit,
    handleClickShowPassword,
    showPassword,
    handleClickShowPassword1,
    showPassword1,
  } = UseRegisterForm();

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
            src={forgetPaswword}
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
        <Box width={{ xs: "90%", sm: "80%", md: "60%" }} textAlign="center">
          <SignInIcon
            sx={{
              fontSize: 200,
              height: 84,
            }}
          />
          <Typography variant="h4" gutterBottom>
            Reset your Password
          </Typography>
          <Link
            href="#"
            underline="none"
            color="primary"
            sx={{ display: "block", marginBottom: "1rem" }}
          >
            Reset your account password
          </Link>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} mt={3} mb={4}>
              <Grid item xs={12} md={12}>
                <RHFTextField
                  name="password"
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"} // Toggle between text and password
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
                  type={showPassword1 ? "text" : "password"} // Toggle between text and password
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
            </Grid>

            <Button variant="contained" type="submit" fullWidth color="primary">
              Reset Password
            </Button>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ResetPassword;
