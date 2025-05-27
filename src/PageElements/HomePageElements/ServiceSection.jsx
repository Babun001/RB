import './HomePageCss/ServiceSection.css'

export default function ServiceSection() {
    return (
        <>
            <div className="health-section">
                <h2 className="section-title">Popular Health Packages</h2>
                <p className="section-content">
                    Serology Profile | KFT | RBD Healthy Life, Blood (Female) | RBD Healthy Life, Blood (Male) | Iron Profile |{' '}
                    <span className="small-text">RBD Healthy Life ( Male )</span> | FSH, LH, PR | Coagulation Profile | RBD Healthy Life ( Female ) | RBD Healthy Life ( Female ) | LH & FSH |{' '}
                    <span className="small-text">Master Health Check up</span>
                </p>

                <h2 className="section-title">Popular Service</h2>
                <p className="section-content">
                    Radiology | Dental | Pathology | Ophthal | Cardiology | Dermatology | Neurology | Dialysis | Imaging | Home care | physiotherapy | OPD Chambers
                </p>

                <h2 className="section-title">Our Presence</h2>
                <p className="section-content">
                    Lake Town | Salt lake | Andul | Tobin Road | kankurgachi | Topsia | Barasat | Deshpriya park | Behala | contai | Nepal(Kathmandu)
                </p>
            </div>
        </>
    )
}