// src/guards/AuthGuard.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { checkAuthStatus } from "@/src/utils/cookies-store";
import toast from "react-hot-toast";

interface AuthGuardProps {
  children: React.ReactNode;
}

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

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
//   const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (!checked) {
      const userData = checkAuthStatus();

      if (!userData) {
        // 🔴 Redirect to login if not authenticated
        toast.error(`🔴 UnAuthenticated`);
        router.replace("/sign-in");
      } else {
        // setUserRole(userData.account_type); // ✅ Store role from cookies

        // 🔹 Check role-based access
        if (userData.account_type && roleBasedRoutes[userData.account_type]) {
          const allowedRoutes = roleBasedRoutes[userData.account_type];
          const hasAccess = allowedRoutes.some(route => 
            pathname === route || pathname.startsWith(`${route}/`)
          );

          if (!hasAccess) {
            
            toast.error(`🚫 Access denied to ${pathname} for ${userData.account_type}`);
            router.replace("/dashboard"); // 🔴 Redirect unauthorized users
          } else {
            setChecked(true);
          }
        } else {
          
          toast.error(`❌ Invalid account type: ${userData.account_type}`);
          router.replace("/sign-in");
        }
      }
    }
  }, [pathname, checked, router]);

  // 🔄 Show loading indicator while checking authentication
  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
