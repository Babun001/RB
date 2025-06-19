import PatientRegisterForm from "../PageElements/RegistrationPageElements/RegistrationSection"
import ServiceSection from "../PageElements/HomePageElements/ServiceSection"
import ConsultSection from "../PageElements/HomePageElements/ConsultSection"

export default function RegistrationPage() {
    return (
        <>
            <PatientRegisterForm />
            <ServiceSection />
            <ConsultSection />
        </>
    )
}