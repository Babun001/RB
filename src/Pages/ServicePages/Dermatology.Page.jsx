import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import { FaGreaterThan } from "react-icons/fa6";

import ServiceBody from "../../ServiceComponents/ServiceBody";

import ServiceSection from "../../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../../PageElements/HomePageElements/ConsultSection";

export default function DermatologyPage() {
    return (
        <>
            <ServiceHeader
                childClass="dermatologyBGSection"
                breadcrumb={<>Services <FaGreaterThan size={15} /> Dermatology</>}
                title="Dermatology"
            />

            <ServiceBody
                serviceName="Dermatology"
            />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}