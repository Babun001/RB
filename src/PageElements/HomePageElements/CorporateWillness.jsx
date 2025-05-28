import { useState } from 'react';
import './HomePageCss/CorporateWillSection.css';
import tcs from '../../Assets/tcs.png';
import wipro from '../../Assets/wipro.png';
import itc from '../../Assets/itc.png';

export default function CorporateWillSection() {
    const [showAll, setShowAll] = useState(false);

    const companies = [
        { cName: "TCS", logo: tcs },
        { cName: "ITC", logo: itc },
        { cName: "WIPRO", logo: wipro },
        { cName: "TCS", logo: tcs },
        { cName: "ITC", logo: itc },
        { cName: "WIPRO", logo: wipro },
    ];

    const displayedCompanies = showAll ? companies : companies.slice(0, 3);

    return (
        <div className="corporateContainer">
            <div className="textSection">
                <h4 className="rb-headingTag cw-headingTag">Corporate Wellness</h4>
                <div className="headLineText">
                    <h2 className="rb-title">Preferred Diagnostic Partner for Corporates Across Industries</h2>
                </div>
                <span className='buttomText'>Companies Who Trust Us</span>
            </div>
            <div className="companiesSection">
                {displayedCompanies.map((company, index) => (
                    <div key={index} className="companyCard">
                        <img src={company.logo} alt={`Company-${index}`} />
                    </div>
                ))}

                {!showAll && (
                    <button className="viewMoreBtn" onClick={() => setShowAll(true)}>More</button>
                )}
            </div>
        </div>
    );
}
