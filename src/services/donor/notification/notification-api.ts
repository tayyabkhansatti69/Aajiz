import { baseAPI } from "../../base-api";
import { DONOR_TRANSACTION } from "../../tags";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getNotification: builder.query({
      query: (params) => ({
        url: `/get_notifications`,
        method: "GET",
        params: {
            limit: params.limit,
            offset: params.offset
          },
      }),
      providesTags: [DONOR_TRANSACTION],
    }),
    
  }),
});

export const {useGetNotificationQuery } =
  authAPI;
