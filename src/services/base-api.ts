// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Store + configuration
 
import { TAGS } from "./tags";
import { BASE_URL } from "@/config";
import { getLocalStorage } from "../utils";


// Create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    
    const rememberMeData:any = getLocalStorage("rememberMe");
    
    // If we have a token in the store, then use that for authenticated requests
    const token:any = rememberMeData?.access_token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    console.log(headers,"header")
    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
