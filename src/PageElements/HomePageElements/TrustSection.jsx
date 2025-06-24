import './HomePageCss/TrustSection.css';
import logo1 from '../../Assets/affiliatLogo.png';
import logo2 from '../../Assets/affiliateLogo2.png';
import logo3 from '../../Assets/affiliateLogo3.png';
export default function TrustSection() {

    const innerTextData = [
        { numbers: '140+', title: "Total No. of Diagnostic Tests Offered" },
        { numbers: '99%', title: "Customer Satisfaction Rate" },
        { numbers: '80+', title: "NABL-Accredited Labs Across Eastern India" },
    ]

    const AffiliatedData = [
        {name:"zyx",logo:logo3},
        {name:"zyx",logo:logo1},
        {name:"zyx",logo:logo2}
    ]
    return (
        <>
            <div className="trustContainer">
                <div className="trustUpperSection">
                    <h2 className="rb-title trust-title" style={{ color: "white", lineHeight:"1", marginTop:"3rem", textAlign:"center" }}>Your Trusted Diagnostic Partner Since 2010</h2>
                    <p className="paraText" style={{ color: "white", lineHeight:"0" }}>
                        Delivering accurate, affordable, and timely diagnostic services with NABL-accredited labs,
                    </p>
                    <p className="paraText" style={{ color: "white" }}>
                        cutting-edge technology, and a commitment to excellence across Eastern India.
                    </p>
                    <div className="innerLowerSection">

                        {
                            innerTextData.map((data, indx) => (
                                <div className="innerLowerTextSection" key={indx}>
                                    <h3>{data.numbers}</h3>
                                    <p>{data.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="trustLowerSection">
                    <h3>Affiliated with:</h3>
                    {
                        AffiliatedData.map((a,inx) =>(
                            <div className="affiliatedWith" key={inx}>
                                <img src={a.logo} alt={a.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}