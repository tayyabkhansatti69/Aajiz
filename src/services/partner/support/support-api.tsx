import { baseAPI } from "../../base-api";

export const supportApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    support: builder.mutation({
      query: (body: any) => ({
        url: "/create_ticket",
        method: "POST",
        body,
      }),
    }),
    getTickets: builder.query({
      query: (params) => ({
        url: `/get_ticket`,
        method: "GET",
        params
      }),
    }),
  }),
});

export const { useSupportMutation,useGetTicketsQuery } = supportApi;
