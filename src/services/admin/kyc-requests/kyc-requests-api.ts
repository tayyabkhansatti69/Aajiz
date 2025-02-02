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
      query: () => ({
        url: `/get_cancel_partner_kyc`,
        method: "GET",
      }),
    }),
    getCancelDonorKycRequestsList: builder.query({
      query: () => ({
        url: `/get_cancel_donor_kyc`,
        method: "GET",
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
