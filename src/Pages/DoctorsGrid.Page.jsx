
import GridMainSection from "../PageElements/DoctorsGridPageElements/GridMainSection";
import DoctorGridFirstSection from "../PageElements/DoctorsGridPageElements/DoctorGridFirstSection";
import ServiceSection from "../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../PageElements/HomePageElements/ConsultSection";

export default function DoctorsGridPage() {
    return (
        <>
            <DoctorGridFirstSection/>
            <GridMainSection/>
            <ServiceSection />
            <ConsultSection />
        </>
    )
}