//  import { setSessionStorage } from "@/utils";
import { setSessionStorage } from "@/src/utils";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { setSessionStorage } from "common";

type LoginAction = PayloadAction<any>;

// Define the AuthState type
export interface AuthState {
  access_token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  user:string
  // Add other fields as needed
}


export const loginSuccess = (state: AuthState, action: LoginAction) => {
  const { data } = action.payload;
  

  state.access_token = data.access_token;
  state.refreshToken = data.refreshToken;
  state.user = data.user;
  state.isAuthenticated = true;

  setSessionStorage("access_token", data.access_token);
  setSessionStorage("refreshToken", data.refreshToken);
};

export const authMeSuccess = (state: AuthState, action: LoginAction) => {
  const { data } = action.payload;
  state.access_token = data.authToken;
  state.refreshToken = data.refreshToken;
  state.isAuthenticated = true;

  setSessionStorage("access_token", data.authToken);
  setSessionStorage("refreshToken", data.refreshToken);
};
