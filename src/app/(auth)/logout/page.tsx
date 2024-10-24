"use client";

import { clearLocalStorage } from "@/src/utils";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function Logout() {
  const router = useRouter();
  const hasShownToast = useRef(false); // Ref to track if toast has been shown

  useEffect(() => {
    if (!hasShownToast.current) {
      toast.success("Logout successfully!");
      hasShownToast.current = true; // Mark the toast as shown
    }
    clearLocalStorage();
    router.push('/sign-in');
  }, [router]);

  return null; // or empty fragment <>
}
