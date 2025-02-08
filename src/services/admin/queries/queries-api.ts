import { baseAPI } from "../../base-api";

export const QueriesAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDonorQueriesList: builder.query({
      query: () => ({
        url: `/get_ticket_admin`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDonorQueriesListQuery } = QueriesAPI;
