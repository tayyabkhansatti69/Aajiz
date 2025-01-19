import { baseAPI } from "./base-api";
import { USERS } from "./tags";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: (user: { id: string }) => ({
        url: "users/logout",
        method: "POST",
        body: user,
      }),
      invalidatesTags: [USERS],
    }),
    login: builder.mutation({
      query: (credentials: any) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    changePassword: builder.mutation({
      query: (body: any) => ({
        url: "/forget_update_password",
        method: "PUT",
        body,
      }),
    }),
    authMe: builder.mutation({
      query: (body) => ({
        url: "auth/refresh-token",
        method: "PUT",
        body,
      }),
    }),
    signUp: builder.mutation({
      query: (body: any) => ({
        url: "/user_sign_up",
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/forget_password",
        method: "POST",
        body,
      }),
    }),
    setNewPassword: builder.mutation({
      query: (body) => ({
        url: "/auth/set-new-password",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/auth/confirm-forgot-password",
        method: "POST",
        body,
      }),
    }),
    otpVerification: builder.mutation({
      query: (body: any) => ({
        url: "/verify_otp",
        method: "POST",
        body,
      }),
    }),
    forgotPasswordOtp: builder.mutation({
      query: (body) => ({
        url: "/forget_password_otp",
        method: "POST",
        body,
      }),
    }),
    donorKyc: builder.mutation({
      query: (body) => ({
        url: "/donor_kyc",
        method: "POST",
        body,
      }),
    }),
    partnerKyc: builder.mutation({
      query: (body) => ({
        url: "/partner_kyc",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useAuthMeMutation,
  useLoginMutation,
  useSignUpMutation,
  useOtpVerificationMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useForgotPasswordOtpMutation,
  useChangePasswordMutation,
  useSetNewPasswordMutation,
  useResetPasswordMutation,
  useDonorKycMutation,
  usePartnerKycMutation,
} = authAPI;
