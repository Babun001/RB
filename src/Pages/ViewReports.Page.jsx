import ViewReportImageSection from "../PageElements/ViewReportsPageElements/ViewReportImageSection"
import ViewReportFormSection from "../PageElements/ViewReportsPageElements/ViewReportFormSection"
import OurPackage from "../PageElements/HomePageElements/OurPackageSection"
import ServiceSection from "../PageElements/HomePageElements/ServiceSection"
import ConsultSection from "../PageElements/HomePageElements/ConsultSection"

export default function ViewReportsPage() {
    return (
        <>
            <ViewReportImageSection />
            <ViewReportFormSection />
            <OurPackage />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}