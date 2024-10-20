import { baseAPI } from "../../base-api";
import { DONOR_DASHBOARD } from "../../tags";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrustedPartnersList: builder.query({
      query: (params) => ({
        url: `/get_partners`,
        method: "GET",
        params,
      }),
      providesTags: [DONOR_DASHBOARD],
    }),
    getDonorProfile: builder.query({
      query: (): any => ({
        url: `/get_profile`,
        method: "GET",
      }),
      providesTags: [DONOR_DASHBOARD],
    }),
  }),
});

export const { useGetTrustedPartnersListQuery, useGetDonorProfileQuery } =
  authAPI;
