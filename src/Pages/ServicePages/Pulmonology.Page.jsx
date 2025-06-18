
import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";
export default function PulmonologyPage() {
    return (
        <>

            <ServiceHeader
                childClass="pulmonologybgSection"
                breadcrumb={<>Services <FaGreaterThan size={36} /> Pulmonology</>}
                title="Pulmonology"
            />

            <ServiceBody 
                serviceName = "Pulmonology"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}