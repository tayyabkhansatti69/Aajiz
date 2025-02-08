// utils/cookies-store.ts
import { jwtDecode } from "jwt-decode";

interface UserData {
  id: string;
  account_type: string;
  is_kyc: "applied" | "not_applied";
  kyc_verify: boolean;
  [key: string]: any;
}

export const setAuthData = (userData: UserData, access_token: string) => {
  // Set cookies for middleware
  document.cookie = `access_token=${access_token}; path=/`;
  document.cookie = `account_type=${userData.account_type}; path=/`;
  
  // Store in sessionStorage for persistence
  sessionStorage.setItem('access_token', JSON.stringify(access_token));
  sessionStorage.setItem('userData', JSON.stringify(userData));
};

export const checkAuthStatus = () => {
  try {
    const access_token = JSON.parse(sessionStorage.getItem('access_token') || 'null');
    const userData = JSON.parse(sessionStorage.getItem('userData') || 'null');

    if (!access_token || !userData) {
      return null;
    }

    // Validate token
    const decoded: any = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    
    if (decoded?.exp <= currentTime) {
      clearAuthData();
      return null;
    }

    return userData;
  } catch (error) {
    console.error('Auth check failed:', error);
    clearAuthData();
    return null;
  }
};

export const clearAuthData = () => {
  // Clear cookies
  document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  document.cookie = 'account_type=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  
  // Clear sessionStorage
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('userData');
  
  // Clear localStorage if needed
  localStorage.removeItem('rememberMe');
};