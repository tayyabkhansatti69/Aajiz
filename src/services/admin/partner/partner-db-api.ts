import { baseAPI } from "../../base-api";

export const partnerDBAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPartnerDBList: builder.query({
      query: (params) => ({
        url: `/get_partner`,
        method: "GET",
        params
      }),
    }),
  }),
});

export const { useGetPartnerDBListQuery } = partnerDBAPI;
