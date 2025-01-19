import { baseAPI } from "../../base-api";

export const createCampaignsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCampaignsList: builder.query({
      query: ({ params }) => ({
        url: `/get_campaign`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetCampaignsListQuery } = createCampaignsAPI;
