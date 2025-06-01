import CollectionFirstSec from "../PageElements/HomeCollectionPageElements/HomeCollectionFirstSection";
import SampleCollectionSection from "../PageElements/HomeCollectionPageElements/SampleCollectionSection";
import AppointmentSection from "../PageElements/HomeCollectionPageElements/AppointmentSection";
import WHSCSection from "../PageElements/HomeCollectionPageElements/WHSCSection";
import WhyChooseUsRBD from "../PageElements/HomeCollectionPageElements/WhyChooseUs";

import ServiceSection from "../PageElements/HomePageElements/ServiceSection";
import ConsultSection from "../PageElements/HomePageElements/ConsultSection";

export default function HomeCollection(){
    return(
        <>
        <CollectionFirstSec/>
        <SampleCollectionSection/>
        <AppointmentSection/>
        <WHSCSection/>
        <WhyChooseUsRBD/>
        <ServiceSection/>
        <ConsultSection/> 
        </>
    )
}