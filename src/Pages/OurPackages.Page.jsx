
import OurPackageFirstSection from "../PageElements/OurPackagesPageElements/OurPackageFirstSection";
import OurPackageMainSection from "../PageElements/OurPackagesPageElements/OurPackageMainSection";
import ServiceSection from "../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../PageElements/HomePageElements/ConsultSection";

export default function OurPackagesPage() {
    return (
        <>
            <OurPackageFirstSection/>
            <OurPackageMainSection/>
            <ServiceSection />
            <ConsultSection />
        </>
    )
}