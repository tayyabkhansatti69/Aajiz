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
    addBalance: builder.mutation({
      query: (body: any) => ({
        url: "/add_balance",
        method: "POST",
        body,
      }),
    }),
    addDonation: builder.mutation({
      query: (body: any) => ({
        url: "/donate_campaign",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useDonateNowMutation,
  useLoadCardMutation,
  useLazyGetIndustryTypeDropdownListQuery,
  useAddBalanceMutation,
  useAddDonationMutation
} = authAPI;
