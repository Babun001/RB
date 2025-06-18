import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";

export default function NeurologyPage() {
    return (
        <>
            <ServiceHeader
                childClass="pulmonologybgSection"
                breadcrumb={<>Services <FaGreaterThan size={36} /> Neurology</>}
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