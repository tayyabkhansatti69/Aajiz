import {
  useForgotPasswordOtpMutation,
  useOtpVerificationMutation,
} from "@/src/services/auth-api";
import { setLocalStorage } from "@/src/utils";
// import { setLocalStorage } from "@/src/utils";
import { Box, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";

export const OtpInputPage = () => {
  const [postOtpVerification] = useOtpVerificationMutation();
  const [forgetOtpVerification] = useForgotPasswordOtpMutation();
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const email = searchParams.get("email");

  const onSubmit = async () => {
    if (otp.length !== 4) {
      setIsOtpValid(false);
    } else {
      setIsOtpValid(true);
      if (type === "forget") {
        try {
          // Perform signup mutation using RTK Query
          const response = await forgetOtpVerification({
            email,
            otp,
          }).unwrap();

          toast.success(response?.message || "Signed up successfully!");
          router.push(`/reset-password?email=${email}`);
        } catch (error: any) {
          console.error(error);
          toast.error(error?.data?.message || "Something went wrong!");
        }
      } else {
        try {
          // Perform signup mutation using RTK Query
          const response = await postOtpVerification({
            otp,
          }).unwrap();

          // setLocalStorage('rememberMe', response?.body);
          toast.success(response?.message || "Signed up successfully!");
          setLocalStorage("rememberMe", response);
          if (response?.Data_User?.account_type === "donor")
            router.push("/donor-kyc");
          else router.push("/partner-kyc");
        } catch (error: any) {
          console.error(error);
          toast.error(error?.data?.message || "Something went wrong!");
        }
      }
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <OTPInput
          inputStyle={{
            width: "100px",
            height: "100px",
            fontSize: "34px",
            border: "2px solid #99979D",
            borderRadius: "10px",
            justifyContent: "center",
            color: "#022E31",
            background: "transparent",
            display: "flex",
            ...(isOtpValid ? {} : { borderColor: "red" }),
          }}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>&nbsp;&nbsp;</span>}
          renderInput={(props) => <input {...props} />}
        />
      </Box>

      {!isOtpValid && (
        <span style={{ color: "red" }}>Please enter a 4-digit OTP.</span>
      )}

      <Button
        variant="contained"
        sx={{
          mt: "20px",
          width: "80%",
        }}
        type="submit"
        onClick={onSubmit}
      >
        Verify
      </Button>
    </Box>
  );
};
export default OtpInputPage;
