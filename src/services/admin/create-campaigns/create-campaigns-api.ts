import { baseAPI } from "../../base-api";

export const createCampaignsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCampaignsList: builder.query({
      query: ({ params }) => ({
        url: `/get_active_campaign`,
        method: "GET",
        params,
      }),
    }),
    getInactiveCampaignsList: builder.query({
      query: ({ params }) => ({
        url: `/get_inactive_campaign`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetCampaignsListQuery, useGetInactiveCampaignsListQuery } =
  createCampaignsAPI;
