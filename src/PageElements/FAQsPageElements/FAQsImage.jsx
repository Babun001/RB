// import './FAQsPageElementsCss/FAQsImageSection.css';
import ServiceHeader from '../../ServiceComponents/ServiceHeader';
// import { FaGreaterThan } from "react-icons/fa6";
export default function FAQsImageSection() {
    return (
        // <div className=" faqFirstContainer">
        //     <div className="packageFirstUpperSection">

        //     </div>
        // </div>
        <>
            <ServiceHeader
                childClass="faqFirstContainer"
                breadcrumb={<> FAQs</>}
                title="FAQs"
            />
        </>
    );
}