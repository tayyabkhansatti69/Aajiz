import { baseAPI } from "../../base-api";

export const scannedStampAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRecentScannedStampsPartnerList: builder.query({
      query: ({ params }) => ({
        url: `/recent_stamp_scanned`,
        method: "GET",
        params,
      }),
    }),
    getRecentScannedStampsDonorList: builder.query({
      query: ({ params }) => ({
        url: `/get_donations_detail`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useGetRecentScannedStampsPartnerListQuery,
  useGetRecentScannedStampsDonorListQuery,
} = scannedStampAPI;
