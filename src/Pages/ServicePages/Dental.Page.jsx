import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";

export default function DentalPage() {
    return (
        <>
            <ServiceHeader
                childClass="dentalBGSection"
                breadcrumb={<>Services <FaGreaterThan size={15} /> Dental</>}
                title="Dental"
            />

            <ServiceBody
                serviceName="Dental"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}