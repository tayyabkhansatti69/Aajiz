import { baseAPI } from "../../base-api";

export const DiscountApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    manageDiscount: builder.mutation({
      query: (body: any) => ({
        url: "/update_discount_manager",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useManageDiscountMutation } = DiscountApi;
