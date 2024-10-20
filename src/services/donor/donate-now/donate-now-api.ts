import { baseAPI } from "../../base-api";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    donateNow: builder.mutation({
      query: (body: any) => ({
        url: "/generate_e_stamp",
        method: "POST",
        body,
      }),
    }),
    loadCard: builder.mutation({
      query: (body: any) => ({
        url: "/load_card",
        method: "POST",
        body,
      }),
    }),
    getIndustryTypeDropdownList: builder.query({
      query: () => ({
        url: `/get_industry`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useDonateNowMutation,
  useLoadCardMutation,
  useLazyGetIndustryTypeDropdownListQuery,
} = authAPI;
