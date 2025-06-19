import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";

export default function HomecarePage() {
    return (
        <>
            <ServiceHeader
                childClass="homecareBGSection"
                breadcrumb={<>Services <FaGreaterThan size={36} /> Homecare</>}
                title="Homecare"
            />

            <ServiceBody
                serviceName="Homecare"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}