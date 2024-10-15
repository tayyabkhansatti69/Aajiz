"use client";

import SaleFooter from "../layouts/saleSite/footer/sale-footer";
import SaleHeader from "../layouts/saleSite/header/Sale-header";
import MainSaleSite from "../sections/salesite";



export default function Home() {

  return (
    <>
       <SaleHeader />
      <MainSaleSite />
      <SaleFooter/> 
      

    </>
  );
}


