import { baseAPI } from "../../base-api";

export const createCampaignsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCardsRequestList: builder.query({
      query: (params) => ({
        url: `/get_card_request`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetCardsRequestListQuery } = createCampaignsAPI;
