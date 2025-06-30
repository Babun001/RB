import ContactBGSection from "../PageElements/ContactPageElement/ContactBgSection.jsx";
import ContactInfoSection from "../PageElements/ContactPageElement/ContactInfoSection.jsx";
import AllCentersSection from "../PageElements/ContactPageElement/AllCentersSection.jsx";
import ServiceSection from "../PageElements/HomePageElements/ServiceSection.jsx";
import ConsultSection from "../PageElements/HomePageElements/ConsultSection.jsx";
import AskQuestionSection from "../PageElements/ContactPageElement/AskQuestionSection.jsx";

export default function ContactUsPage() {
    return (
        <>
            <ContactBGSection />
            <ContactInfoSection />
            <AskQuestionSection/>
            <AllCentersSection />
            <ServiceSection />
            <ConsultSection />
        </>
    );
}