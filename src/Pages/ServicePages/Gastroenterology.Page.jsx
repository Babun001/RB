import ServiceHeader from "../../ServiceComponents/ServiceHeader";
import ServiceBody from "../../ServiceComponents/ServiceBody";


import { FaGreaterThan } from "react-icons/fa6";


import ConsultSection from "../../PageElements/HomePageElements/ConsultSection"
import ServiceSection from "../../PageElements/HomePageElements/ServiceSection"
export default function GastroenterologyPage() {
    return (
        <>
            <ServiceHeader
                childClass="gastroenterologyBgSection"
                breadcrumb={<>Services <FaGreaterThan size={36} /> Gastroenterology</>}
                title="Gastroenterology"
            />

            <ServiceBody
                serviceName="Gastroenterology"
            />

            <ServiceSection />
            <ConsultSection />
        </>
    )
}