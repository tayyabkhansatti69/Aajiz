"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import SaleFooter from "../layouts/saleSite/footer/sale-footer";
// import SaleHeader from "../layouts/saleSite/header/Sale-header";
// import MainSaleSite from "../sections/salesite";



// export default function Home() {

//   return (
//     <>
//        {/* <SaleHeader />
//       <MainSaleSite />
//       <SaleFooter/>  */}
      

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