// import { StyledLink } from "@/components";
// import {
//     FormProvider,
//     RHFSelect,
//     RHFTextField
// } from "@/components/rhf";
import { StyledLink } from "@/src/components";
import { FormProvider, RHFSelect, RHFTextField } from "@/src/components/rhf";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
function ParentSignupForm() {
  const methods = useForm({
    defaultValues: {},
  });
  const { handleSubmit } = methods;
  const Router = useRouter();
  const onSubmit = () => {
    Router.push("/dashboard");
  };
  return (
    <Stack spacing={2} mt={5} px={2}>
    <Stack spacing={1} alignItems="center" direction="row" mt={1}>
      <IconButton onClick={() => Router.back()}>
        <ArrowBackOutlinedIcon sx={{ color: "primary.main", fontSize: 60 }} />
      </IconButton>
      <Typography variant="h2" color="primary.main">
        Sign up
      </Typography>
    </Stack>
    <Typography variant="body1" color="primary.main">
    Let’s get you all set up so you can access your parent account.
    </Typography>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid xs={12} sm={6} p={1} item>
          <RHFTextField
            type="text"
            label="Name *"
            fullWidth
            name="name"
            placeholder="Enter Name Here"
          />
        </Grid>
        <Grid xs={12} sm={6} p={1} item>
          <RHFTextField
            type="text"
            label="Email *"
            fullWidth
            name="email"
            placeholder="Enter Email Here"
          />
        </Grid>
        
        
        <Grid xs={12} sm={6} p={1} item>
          <RHFSelect
            label="Gender *"
            fullWidth
            name="gender"
            placeholder="Select Grade"
          />
        </Grid>
        <Grid xs={12} sm={6} p={1} item>
          <RHFTextField
            type="text"
            label="Student ID*"
            fullWidth
            name="studentId"
            placeholder="Enter Age "
          />
        </Grid>
        <Grid xs={12} sm={6} p={1} item>
          <RHFTextField
            type="password"
            fullWidth
            label="Password *"
            name="password"
            placeholder="Enter Password Here"
          />
        </Grid>
        <Grid xs={12} sm={6} p={1} item>
          <RHFTextField
            type="password"
            fullWidth
            label="confirm Password *"
            name="confirmPassword"
            placeholder="Enter Password Here"
          />
        </Grid>
        <Grid xs={12} p={1}  item>
          <Box display={"flex"} width={"100%"} justifyContent={"center"} alignContent="center"  mt={2}>
            <LoadingButton
              variant="outlined"
              type="submit"
              sx={{ borderRadius: 30,minWidth: 200, color: "primary.main" }}
              endIcon={<ArrowForwardIcon />}
            >
              Finish
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
    <Typography
      variant="body2"
      component="span"
      textAlign="center"
      fontWeight={600}
      color="primary.main"
    >
      {`Already have an account?`}
      <StyledLink href="/sign-in">Login</StyledLink>
    </Typography>
    <Stack direction="column">
      <Divider>
        <Typography variant="subtitle2" color="primary.main">
          Or login with
        </Typography>
      </Divider>
      <Stack gap={2} direction={"row"} justifyContent="center" mr={1}>
        <IconButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37262 0 0 5.40536 0 12.0733C0 18.0994 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6575 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3398 7.92313 13.875 8.85381 13.875 9.80864V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z"
              fill="#1877F2"
            />
          </svg>
        </IconButton>
        <IconButton>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
              fill="#FFC107"
            />
            <path
              d="M1.15308 5.3455L4.43858 7.755C5.32758 5.554 7.48058 4 10.0001 4C11.5296 4 12.9211 4.577 13.9806 5.5195L16.8091 2.691C15.0231 1.0265 12.6341 0 10.0001 0C6.15908 0 2.82808 2.1685 1.15308 5.3455Z"
              fill="#FF3D00"
            />
            <path
              d="M9.99991 20C12.5829 20 14.9299 19.0115 16.7044 17.404L13.6094 14.785C12.5717 15.5742 11.3036 16.001 9.99991 16C7.39891 16 5.19041 14.3415 4.35841 12.027L1.09741 14.5395C2.75241 17.778 6.11341 20 9.99991 20Z"
              fill="#4CAF50"
            />
            <path
              d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
              fill="#1976D2"
            />
          </svg>
        </IconButton>
      </Stack>
    </Stack>
  </Stack>
  );
}

export default ParentSignupForm;
