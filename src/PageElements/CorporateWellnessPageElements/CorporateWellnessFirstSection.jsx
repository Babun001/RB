// import './CorporateWellnessPageCss/CorporateWellnessFirstSection.css';

import ServiceHeader from "../../ServiceComponents/ServiceHeader"

export default function CorporateWellnessFirstSection() {
    return (
        <>
            {/* <div className="faqFirstContainer corporateWellnessFirstContainer">
                <div className="packageFirstUpperSection">

                </div>
            </div> */}

            <ServiceHeader
                childClass="corporateWellness"
                breadcrumb={<> Corporate Wellness</>}
                title="Corporate Wellness"
            />
        </>
    )
}