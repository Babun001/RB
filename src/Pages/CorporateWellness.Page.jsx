
import CorporateWellnessFirstSection from "../PageElements/CorporateWellnessPageElements/CorporateWellnessFirstSection";
import CorporateAndEnquirySection from "../PageElements/CorporateWellnessPageElements/CorporateAndEnquirySection";
import TrustedPartnerSection from "../PageElements/CorporateWellnessPageElements/TrustedPartnerSection";
import ForFranchiseSection from "../PageElements/CorporateWellnessPageElements/ForFranchisessSection";


import ServiceSection from "../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../PageElements/HomePageElements/ConsultSection";

export default function CorporateWellnessPage() {
    return (
        <>
            <CorporateWellnessFirstSection/>
            <CorporateAndEnquirySection/>
            <TrustedPartnerSection/>
            <ForFranchiseSection/>

            <ServiceSection />
            <ConsultSection />
        </>
    );
}