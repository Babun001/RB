import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";


export default function OphthalmologyPage() {
    return (
        <>
            <ServiceHeader
                childClass="OphthalmologyBGSection"
                breadcrumb={<>Services <FaGreaterThan size={15} /> Ophthalmology</>}
                title="Ophthalmology"
            />

            <ServiceBody
                serviceName="Ophthalmology"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}