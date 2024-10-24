import { baseAPI } from "../../base-api";
import { WITHDRAW_AMOUNT } from "../../tags";

export const withdrawAmountApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => ({
        url: `/get_account`,
        method: "GET",
      }),
    }),
    withdrawAmount: builder.mutation({
      query: (body: any) => ({
        url: "/withdraw_request",
        method: "POST",
        body,
      }),
      invalidatesTags: [WITHDRAW_AMOUNT],
    }),
  }),
});

export const { useWithdrawAmountMutation, useLazyGetAccountQuery } =
  withdrawAmountApi;
