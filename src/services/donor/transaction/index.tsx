import { baseAPI } from "../../base-api";
import { DONOR_TRANSACTION } from "../../tags";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTransactionList: builder.query({
      query: (params) => ({
        url: `/get_donations`,
        method: "GET",
        params: {
          limit: params.limit,
          offset: params.offset,
        },
      }),
      providesTags: [DONOR_TRANSACTION],
    }),
    getBalance: builder.query({
      query: (params) => ({
        url: `/get_balance`,
        method: "GET",
        params: {
          limit: params.limit,
          offset: params.offset,
        },
      }),
      providesTags: [DONOR_TRANSACTION],
    }),
  }),
});

export const { useGetTransactionListQuery, useGetBalanceQuery } = authAPI;
