import { baseAPI } from "../../base-api";

export const addAccountApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addAccount: builder.mutation({
      query: (body: any) => ({
        url: "/add_account",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddAccountMutation } = addAccountApi;
