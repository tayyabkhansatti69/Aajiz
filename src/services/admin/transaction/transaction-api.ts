import { baseAPI } from "../../base-api";

export const transactionAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPartnerTransactionList: builder.query({
      query: (params) => ({
        url: `/partner_transaction_history`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetPartnerTransactionListQuery } = transactionAPI;
