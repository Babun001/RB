import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";

export default function DialysisPage() {
    return (
        <>
            <ServiceHeader
                childClass="dialysisBgSection"
                breadcrumb={<>Services <FaGreaterThan size={15} /> Dialysis</>}
                title="Dialysis"
            />

            <ServiceBody
                serviceName="Dialysis"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}