import { baseAPI } from "../../base-api";

export const kycRequestsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDonorKycRequestsList: builder.query({
      query: () => ({
        url: `/get_donor_kyc`,
        method: "GET",
      }),
    }),
    getPartnerKycRequestsList: builder.query({
      query: () => ({
        url: `/get_partner_kyc`,
        method: "GET",
      }),
    }),
    getCancelPartnerKycRequestsList: builder.query({
      query: (params) => ({
        url: `/get_cancel_partner_kyc`,
        method: "GET",
        params
      }),
    }),
    getCancelDonorKycRequestsList: builder.query({
      query: (params) => ({
        url: `/get_cancel_donor_kyc`,
        method: "GET",
        params
      }),
    }),
  }),
});

export const {
  useGetDonorKycRequestsListQuery,
  useGetPartnerKycRequestsListQuery,
  useGetCancelDonorKycRequestsListQuery,
  useGetCancelPartnerKycRequestsListQuery,
} = kycRequestsAPI;
