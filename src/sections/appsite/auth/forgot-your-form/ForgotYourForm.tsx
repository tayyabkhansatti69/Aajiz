import { FormEmailIcon } from "@/src/assets/form-email-icon";
// import { PasswordIcon } from "@/assets/password-icon";
// import { FormProvider,  RHFTextField } from "@/components/rhf";
import {
  Box,
  // Divider,
  Stack,
  Typography,
  // styled,
  // IconButton,
} from "@mui/material";
// import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "@/src/components/rhf";
// import { signInFormSchema } from "./sign-in.schema";
// import { yupResolver } from "@hookform/resolvers/yup";
function ForgotYourForm() {
  const methods = useForm({
    defaultValues: {},
    // resolver: yupResolver(signInFormSchema),
  });
  const { handleSubmit } = methods;
  const onSubmit = () => {};
  return (
    <Box px={4} mt={4}>
      <Stack spacing={1} direction="column" mb={1}>
        <Typography variant="h4" color="initial">
          Forgot your password?
        </Typography>
        <Typography variant="body1" color="initial">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </Typography>
      </Stack>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} direction="column" mt={2}>
          <RHFTextField
            type="text"
            outerLabel="Email *"
            fullWidth
            name="email"
            placeholder="Enter Email Here"
            StartIcon={<FormEmailIcon sx={{ color: "neutral.500", mr: 1 }} />}
          />

          <LoadingButton
            fullWidth
            variant="contained"
            type="submit"
            sx={{ borderRadius: "8px" }}
          >
            Submit
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Box>
  );
}

export default ForgotYourForm;
