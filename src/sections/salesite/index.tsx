import React from "react";
import Section_one from "./sections/section_1";
import AboutUsFunction from "./sections/about-us-section";
import ObjectiveSection from "./sections/objective-section";
import PartnerSection from "./sections/partner-section";
import DonorSection from "./sections/donor-section";

function MainSaleSite() {
  return (
    <div>
      <Section_one />
      <AboutUsFunction />
      <ObjectiveSection />
      <PartnerSection />
      <DonorSection />
    </div>
  );
}

export default MainSaleSite;
