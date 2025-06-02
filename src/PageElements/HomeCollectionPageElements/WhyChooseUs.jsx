import './HomeCollectionCss/WhyChooseUs.css'

const whyRBD = [
    { point: "Trained Phlebotomists", text: "Our experienced professionals ensure safe and hygienic sample collection right at your doorstep" },
    { point: "Sterile & Safe Protocols", text: "We follow strict infection control practices and use single-use, sterilized equipment for every collection." },
    { point: "Timely Service", text: "Punctual home visits and quick turnaround of test results via our secure digital platforms." },
    { point: "NABL-Accredited Labs", text: "Your samples are tested in fully accredited labs using advanced diagnostic technology." },
    { point: "Complete Diagnostic Support", text: "From routine blood tests to specialized diagnostics - We bring the lab to your home with unmatched accuracy." }
]

export default function WhyChooseUsRBD() {
    return (
        <>
            <div className="whyRBDContainer">
                <div className="rbdUpperSection">
                    <h2 className="rb-title wcrbd-title">Why Choose RB Diagnostics for Home Sample Collection?</h2>
                </div>
                <div className="rbdLowerSection">
                    {
                        whyRBD.map((info, indx) => (
                            <div className="textArea" key={indx}>
                                <p>{info.point} : {info.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}