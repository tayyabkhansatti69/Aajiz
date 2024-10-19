
import { jwtDecode } from "jwt-decode";
import { getSessionStorage, removeSessionStorage, setSessionStorage } from "./session-storage";

const isValidToken = (access_token: any): any => {
  if (!access_token) {
    return false;
  }
  const decoded: any = jwtDecode(access_token);
  if (!decoded) return;
  const currentTime: any = Date.now() / 1000;
  return decoded?.exp > currentTime;
};

const setSession = (access_token: any) => {
  if (access_token) {
    setSessionStorage("access_token", access_token);
  } else {
    removeSessionStorage("access_token");
  }
};

export const isAuthenticated = (): boolean =>
  Boolean(getSessionStorage("access_token"));

export const handleAuthentication = (): any => {
  const access_token = getSessionStorage("access_token");
  if (!access_token) {
    return;
  }
  if (isValidToken(access_token)) {
    setSession(access_token);
  } else {
    setSession(null);
  }
};
