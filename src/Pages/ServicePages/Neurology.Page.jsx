import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";

export default function NeurologyPage() {
    return (
        <>
            <ServiceHeader
                childClass="neurologyBGSection"
                breadcrumb={<>Services <FaGreaterThan size={15} /> Neurology</>}
                title="Neurology"
            />

            <ServiceBody
                serviceName="Neurology"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}