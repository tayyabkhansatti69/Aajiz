// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

// JWT validation function for middleware
function isValidToken(token: string): boolean {
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded?.exp > currentTime;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  console.log("🔥 Middleware is executing:", req.nextUrl.pathname);

  // Get token from cookie
  const token = req.cookies.get("access_token")?.value;
  const accountType = req.cookies.get("account_type")?.value;

  // Check if path is login
  if (req.nextUrl.pathname === '/sign-in') {
    return NextResponse.next();
  }

  // Check if token exists and is valid
  if (!token || !isValidToken(token)) {
    // Remove invalid cookies if they exist
    const response = NextResponse.redirect(new URL("/sign-in", req.url));
    response.cookies.delete("access_token");
    response.cookies.delete("account_type");
    return response;
  }

  const urlPath = req.nextUrl.pathname;

  // Define allowed routes for each role
  const roleBasedRoutes: Record<string, string[]> = {
    super_admin: [
      "/dashboard",
      "/scanned-stamps",
      "/kyc-requests",
      "/card-requests",
      "/donors",
      "/partners",
      "/admin-transactions",
      "/withdraw-requests",
      "/create-campaigns",
      "/queries",
      "/super-admin",
      "/setting",
      "/support"
    ],
    donor: [
      "/dashboard", 
      "/transaction", 
      "/support", 
      "/setting"
    ],
    partner: [
      "/dashboard", 
      "/transactions", 
      "/support", 
      "/setting"
    ]
  };

  // Check if user has access to the current route
  if (accountType && roleBasedRoutes[accountType]) {
    const allowedRoutes = roleBasedRoutes[accountType];
    const hasAccess = allowedRoutes.some(route => 
      urlPath === route || urlPath.startsWith(`${route}/`)
    );

    if (!hasAccess) {
      console.log(`Access denied to ${urlPath} for ${accountType}`);
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  } else {
    console.log(`Invalid account type: ${accountType}`);
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    "/dashboard/:path*",
    "/transaction/:path*",
    "/transactions/:path*",
    "/setting/:path*",
    "/support/:path*",
    "/scanned-stamps/:path*",
    "/kyc-requests/:path*",
    "/card-requests/:path*",
    "/donors/:path*",
    "/partners/:path*",
    "/admin-transactions/:path*",
    "/withdraw-requests/:path*",
    "/create-campaigns/:path*",
    "/queries/:path*",
    "/super-admin/:path*",
  ],
};