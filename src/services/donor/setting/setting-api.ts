import { baseAPI } from "../../base-api";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation({
      query: (body: any) => ({
        url: "/update_profile",
        method: "PUT",
        body,
      }),
    }),
    editPassword: builder.mutation({
      query: (body: any) => ({
        url: "/update_password",
        method: "PUT",
        body,
      }),
    }),
    updateProfile: builder.mutation({
      query: (body: any) => ({
        url: "/profile_image",
        method: "PUT",
        body,
      }),
    }),
    getDonorProfile: builder.query({
      query: () => ({
        url: `/get_donor_profile`,
        method: "GET",
      }),
    }),
    orderCard: builder.mutation({
      query: (body: any) => ({
        url: "/order_card",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useOrderCardMutation,
  useEditPasswordMutation,
  useEditProfileMutation,
  useUpdateProfileMutation,
  useGetDonorProfileQuery,
} = authAPI;
