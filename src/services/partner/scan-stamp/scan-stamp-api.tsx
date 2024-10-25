import { baseAPI } from "../../base-api";
import { USE_CARD } from "../../tags";

export const scanStampApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    scanCard: builder.mutation({
      query: (body: any) => ({
        url: "/use_card",
        method: "POST",
        body,
      }),
      invalidatesTags: [USE_CARD],
    }),
    scanEStamp: builder.mutation({
      query: (body: any) => ({
        url: "/use_e_stamp",
        method: "POST",
        body,
      }),
      invalidatesTags: [USE_CARD],
    }),
  }),
});

export const { useScanCardMutation,useScanEStampMutation } = scanStampApi;
