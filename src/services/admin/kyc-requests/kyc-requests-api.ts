import { baseAPI } from "../../base-api";
import { APPROVE_KYC } from "../../tags";

export const kycRequestsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDonorKycRequestsList: builder.query({
      query: () => ({
        url: `/get_donor_kyc`,
        method: "GET",
      }),
      providesTags: [APPROVE_KYC],
    }),
    getPartnerKycRequestsList: builder.query({
      query: () => ({
        url: `/get_partner_kyc`,
        method: "GET",
      }),
      providesTags: [APPROVE_KYC],
    }),
    getCancelPartnerKycRequestsList: builder.query({
      query: (params) => ({
        url: `/get_cancel_partner_kyc`,
        method: "GET",
        params,
      }),
      providesTags: [APPROVE_KYC],
    }),
    getCancelDonorKycRequestsList: builder.query({
      query: (params) => ({
        url: `/get_cancel_donor_kyc`,
        method: "GET",
        params,
      }),
      providesTags: [APPROVE_KYC],
    }),
    getProfileDetail: builder.query({
      query: (id) => ({
        url: `/get_profile_detail`,
        method: "GET",
        params: { id },
      }),
    }),
    sendQuery: builder.mutation({
      query: (body: any) => ({
        url: "/send_query",
        method: "POST",
        body,
      }),
    }),
    approveKYC: builder.mutation({
      query: (body: any) => ({
        url: "/approve_kyc",
        method: "POST",
        body,
      }),
      invalidatesTags: [APPROVE_KYC],
    }),
  }),
});

export const {
  useGetDonorKycRequestsListQuery,
  useGetPartnerKycRequestsListQuery,
  useGetCancelDonorKycRequestsListQuery,
  useGetCancelPartnerKycRequestsListQuery,
  useGetProfileDetailQuery,
  useSendQueryMutation,
  useApproveKYCMutation,
} = kycRequestsAPI;
