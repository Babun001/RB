
import './HomeCollectionCss/SampleCollectionSection.css';

const sampleCollectionProcess = [
    { indx:1, title:"Schedule an Appointment", para:"Fill out the form to schedule your home sample collection. Our team will get in touch to confirm your appointment."},
    { indx:2, title:"Sample Collection", para:"Our certified phlebotomist arrives at your doorstep at the scheduled time, equipped with sterile, single-use kits to collect your samples safely."},
    { indx:3, title:"Laboratory Analysis", para:"Collected samples are transported under controlled conditions to our NABL-accredited labs for processing."},
    { indx:4, title:"Receive Results", para:"Access your test results promptly via email or through our secure online portal."}
]
export default function SampleCollectionSection(){
    return(
        <>
        <div className="sampleCollectionContainer">
            <div className="sampleCollectionUpperSection">
                <h4 className="rb-headingTag pk-tag long-heading">Bringing Quality Healthcare to Your Doorstep</h4>
                <h2 className="rb-title pk-title">Home Sample Collection Process</h2>
            </div>

            <div className="sampleCollectionLowerSection">
                
            </div>
        </div>


        </>
    )
}