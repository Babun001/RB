import './HomePageCss/ServiceSection.css'
import AnimatedText from '../../AnimatedText';

export default function ServiceSection() {
    return (
        <>
            <div className="health-section">
                <div className="formalTexts">
                    <AnimatedText tag="h2" type="chars" y={30} className="section-title">
                        Popular Health Packages
                    </AnimatedText>
                    {/* <h2 className="section-title">Popular Health Packages</h2> */}
                    <p className="section-content">
                        Serology Profile | KFT | RBD Healthy Life, Blood (Female) | RBD Healthy Life, Blood (Male) | Iron Profile |{' '}
                        <span className="small-text">RBD Healthy Life ( Male )</span> | FSH, LH, PR | Coagulation Profile | RBD Healthy Life ( Female ) | RBD Healthy Life ( Female ) | LH & FSH |{' '}
                        <span className="small-text">Master Health Check up</span>
                    </p>
                </div>


                <div className="formalTexts">
                    <AnimatedText tag="h2" type="chars" y={30} className="section-title">
                        Popular Service
                    </AnimatedText>
                    {/* <h2 className="section-title">Popular Service</h2> */}
                    <p className="section-content">
                        Radiology | Dental | Pathology | Ophthal | Cardiology | Dermatology | Neurology | Dialysis | Imaging | Home care | physiotherapy | OPD Chambers
                    </p>
                </div>



                <div className="formalTexts">
                    <AnimatedText tag="h2" type="chars" y={30} className="section-title">
                        Our Presence
                    </AnimatedText>
                    {/* <h2 className="section-title">Our Presence</h2> */}
                    <p className="section-content">
                        Lake Town | Salt lake | Andul | Tobin Road | kankurgachi | Topsia | Barasat | Deshpriya park | Behala | contai | Nepal(Kathmandu)
                    </p>
                </div>


            </div>
        </>
    )
}