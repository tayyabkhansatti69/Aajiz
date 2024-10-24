import { baseAPI } from "../../base-api";

export const partnerDashboardApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRecentStamp: builder.query({
      query: ({ params }) => ({
        url: `/get_recent_stamp`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetRecentStampQuery } = partnerDashboardApi;
