import { baseAPI } from "../../base-api";

export const donorDBAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDonorDBList: builder.query({
      query: (params) => ({
        url: `/get_donor`,
        method: "GET",
        params
      }),
    }),
  }),
});

export const { useGetDonorDBListQuery } = donorDBAPI;
