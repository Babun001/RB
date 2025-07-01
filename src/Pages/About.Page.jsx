import AboutBGSection from "../PageElements/AboutPageElement/AboutBGSection.jsx";
import AboutRBDSection from "../PageElements/AboutPageElement/AboutRBDSection.jsx";
import OurExpertiseSection from "../PageElements/AboutPageElement/OurExpertiseSection.jsx";
import ReachOutUsSection from "../PageElements/AboutPageElement/ReachOutUsSection.jsx";
import ManagementTeamSection from "../PageElements/AboutPageElement/ManagementTeamSection.jsx";
import BestDoctSection from "../PageElements/AboutPageElement/BestDoctorSection.jsx";
// testimonial
import TestimonialSection from "../PageElements/HomePageElements/TestimonialSection.jsx";

import ServiceSection from "../PageElements/HomePageElements/ServiceSection.jsx";
import ConsultSection from "../PageElements/HomePageElements/ConsultSection.jsx";

export default function AboutPage() {
    return (
        <>
            < AboutBGSection />
            < AboutRBDSection />
            < OurExpertiseSection />
            {/* < ReachOutUsSection /> */}
            < ManagementTeamSection />
            < BestDoctSection />
            < TestimonialSection />
            < ServiceSection />
            < ConsultSection />
        </>
    );
}