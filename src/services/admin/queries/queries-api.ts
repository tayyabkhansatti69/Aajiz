import { baseAPI } from "../../base-api";

export const QueriesAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDonorKycRequestsList: builder.query({
      query: () => ({
        url: `/get_donor_kyc`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDonorKycRequestsListQuery } = QueriesAPI;
