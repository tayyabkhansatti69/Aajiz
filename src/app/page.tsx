"use client";


import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import SaleFooter from "../layouts/saleSite/footer/sale-footer";
// import SaleHeader from "../layouts/saleSite/header/Sale-header";
// import MainSaleSite from "../sections/salesite";



// export default function Home() {
//   const router=useRouter()
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push('/sign-in');
//     }, 0); // Delay by 0 ms to ensure the router is mounted
    
//     return () => clearTimeout(timer); // Cleanup the timer
//   }, [router]);
//   return (
//     <>
//       {/* <SaleHeader />
//       <MainSaleSite />
//       <SaleFooter/> */}
      

//     </>
//   );
// }

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/sign-in');
  }, [router]);

  return null; // or empty fragment <>
}
