import ServiceHeader from "../../ServiceComponents/ServiceHeader"

export default function DoctorImageSection() {
    return (<>
        <ServiceHeader
            childClass="doctorImageSection"
            breadcrumb={<>OPD</>}
            title="OPD"
        />
    </>)
}