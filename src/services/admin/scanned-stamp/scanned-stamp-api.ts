import { baseAPI } from "../../base-api";

export const scannedStampAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRecentScannedStampsList: builder.query({
      query: ({ params }) => ({
        url: `/recent_stamp_scanned`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetRecentScannedStampsListQuery } = scannedStampAPI;
