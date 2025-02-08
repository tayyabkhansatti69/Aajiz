import { baseAPI } from "../../base-api";

export const withdrawRequestAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getWithdrawRequestList: builder.query({
      query: (params) => ({
        url: `/get_withdraw_request`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetWithdrawRequestListQuery } = withdrawRequestAPI;
