import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";

export default function PhysiotherapyPage() {
    return (
        <>
            <ServiceHeader
                childClass="physiotherapyBGSection"
                breadcrumb={<>Services <FaGreaterThan size={15} /> Physiotherapy</>}
                title="Physiotherapy"
            />

            <ServiceBody
                serviceName="Physiotherapy"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}