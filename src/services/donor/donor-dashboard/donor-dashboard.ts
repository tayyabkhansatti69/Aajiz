import { baseAPI } from "../../base-api";
import { DONOR_DASHBOARD, USE_CARD, WITHDRAW_AMOUNT } from "../../tags";

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
      providesTags: [DONOR_DASHBOARD, WITHDRAW_AMOUNT, USE_CARD],
    }),
    getActiveCampaigns: builder.query({
      query: (params) => ({
        url: `/get_active_campaign`,
        method: "GET",
        params,
      }),
      providesTags: [DONOR_DASHBOARD],
    }),
    getCampaignsByID: builder.query({
      query: ({id}:any) => ({
        url: `/get_campaign_by_id?id=${id}`,
        method: "GET",
        
      }),
      providesTags: [DONOR_DASHBOARD],
    }),
  }),
});

export const { useGetTrustedPartnersListQuery, useGetDonorProfileQuery,useGetActiveCampaignsQuery,useGetCampaignsByIDQuery } =
  authAPI;
