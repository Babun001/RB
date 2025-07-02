import './OurPackagesPageCss/OurPackageFirstSection.css';
import ServiceHeader from '../../ServiceComponents/ServiceHeader';

export default function OurPackageFirstSection() {
    return (
        <>
            <ServiceHeader
                childClass="ourPackageFirstSection"
                breadcrumb={<> Our Packages</>}
                title="Our Packages"
            />
        </>
    )
}