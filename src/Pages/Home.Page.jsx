import Navbar from "../Components/Navbar01.jsx";


import SecondaryNavbar from "../Components/Navbar02.jsx";
import FirstSection from "../PageElements/HomePageElements/FirstSection.jsx";
import WelcomeSection from "../PageElements/HomePageElements/WelcomeSection.jsx";
import AboutSection from "../PageElements/HomePageElements/AboutSection.jsx";
import OurPackage from "../PageElements/HomePageElements/OurPackageSection.jsx";
import CorporateWillSection from "../PageElements/HomePageElements/CorporateWillness.jsx";
import PackagesSection from "../PageElements/HomePageElements/PackagesSection.jsx";
import TestsSection from "../PageElements/HomePageElements/TestsSections.jsx";
import WhyChooseUsSection from "../PageElements/HomePageElements/WhyChooseUsSection.jsx";
import TrustSection from "../PageElements/HomePageElements/TrustSection.jsx";
import TestimonialSection from "../PageElements/HomePageElements/TestimonialSection.jsx";
import FAQSectionSection from "../PageElements/HomePageElements/FAQSection.jsx";
import ServiceSection from "../PageElements/HomePageElements/ServiceSection.jsx";
import ConsultSection from "../PageElements/HomePageElements/ConsultSection.jsx";


import FooterSection from "../Components/Footer.jsx";




export default function Home() {
    return (
        <>
            <Navbar />
            <SecondaryNavbar />
            <FirstSection />
            <WelcomeSection />
            <AboutSection />
            <OurPackage/>
            <CorporateWillSection/>
            <PackagesSection/>
            <TestsSection/>
            <WhyChooseUsSection/>
            <TrustSection/>
            <TestimonialSection/>
            <FAQSectionSection/>
            <ServiceSection/>
            <ConsultSection/>

            <FooterSection/>
        </>
    )
}

