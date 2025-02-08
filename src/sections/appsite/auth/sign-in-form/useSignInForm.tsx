import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setLocalStorage } from "@/src/components/utils";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/src/services/auth-api";
import toast from "react-hot-toast";
import { useState } from "react";
import { setAuthData } from "@/src/utils/cookies-store";

// Yup schema
export const Schema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required"),
});

// Default values
export const defaultValues = {
  username: "",
  password: "",
};

interface UserData {
  id:any;
  is_kyc: "applied" | "not_applied";
  kyc_verify: boolean;
  account_type: string;
}

export const UseSignInForm = () => {
  const [loginPost, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const methods = useForm<any>({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const handleClickShowPassword = () => setShowPassword(prev => !prev);

  const handleAuthSuccess = (Data_User: UserData, access_token: string, response: any) => {
    // Set auth data in cookies for middleware
    setAuthData(Data_User, access_token);
    
    // Store in localStorage if needed
    setLocalStorage("rememberMe", response);
    
    toast.success(response?.message || "Sign in successful!");
    
    // Use replace instead of push to prevent back navigation to login
    router.replace("/dashboard");
  };

  const handleKYCStatus = (Data_User: UserData, access_token: string, response: any) => {
    const { is_kyc, kyc_verify, account_type } = Data_User;

    // Super admin bypasses KYC checks
    if (account_type === "super_admin") {
      return handleAuthSuccess(Data_User, access_token, response);
    }

    // KYC verification pending
    if (is_kyc === "applied" && !kyc_verify) {
      toast.error("Your KYC verification is pending admin approval!");
      return false;
    }

    // KYC not applied or KYC verified
    if (is_kyc === "not_applied" || (is_kyc === "applied" && kyc_verify)) {
      return handleAuthSuccess(Data_User, access_token, response);
    }

    return false;
  };

  async function onSubmit(data: any): Promise<void> {
    try {
      const credentials = new URLSearchParams();
      credentials.append("username", data.username);
      credentials.append("password", data.password);

      const response = await loginPost(credentials).unwrap();
      const { Data_User, access_token } = response;

      // Handle authentication based on KYC status
      handleKYCStatus(Data_User, access_token, response);
      
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error?.data?.message || "Something went wrong!");
    }
  }

  return {
    methods,
    handleSubmit,
    onSubmit,
    handleClickShowPassword,
    showPassword,
    isLoading,
  };
};