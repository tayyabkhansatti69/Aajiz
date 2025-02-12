import { baseAPI } from "../../base-api";

export const adminDashboardAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAdminDashboardData: builder.query({
      query: () => ({
        url: `/dashboard_admin`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAdminDashboardDataQuery } = adminDashboardAPI;
