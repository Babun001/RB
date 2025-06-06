import { useRef } from 'react';
import './HomePageCss/CorporateWillSection.css';
import Slider from "react-slick";

import tcs from '../../Assets/tcs.png';
import wipro from '../../Assets/wipro.png';
import itc from '../../Assets/itc.png';

export default function CorporateWillSection() {
    const sliderRef = useRef(null);

    const companies = [
        { cName: "TCS", logo: tcs },
        { cName: "ITC", logo: itc },
        { cName: "WIPRO", logo: wipro },
        { cName: "TCS", logo: tcs },
        { cName: "ITC", logo: itc },
        { cName: "WIPRO", logo: wipro },
        { cName: "TCS", logo: tcs },
        { cName: "ITC", logo: itc },
    ];

    const handleMoreClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            sliderRef.current.slickNext();
            sliderRef.current.slickNext();
        }
    };

    const settings = {
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: false,
        // ref: sliderRef,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="corporateContainer">
            <div className="textSection">
                <h4 className="rb-headingTag cw-headingTag">Corporate Wellness</h4>
                <div className="headLineText corporateHeadLineText">
                    <h2 className="rb-title">Preferred Diagnostic Partner for Corporates Across Industries</h2>
                </div>
                <span className='buttomText'>Companies Who Trust Us</span>
            </div>

            <div className="companiesSection">
                <div className="sliderWrapper">
                    <Slider ref={sliderRef} {...settings}>
                        {companies.map((company, index) => (
                            <div key={index} className="companyCard">
                                <img src={company.logo} alt={company.cName} />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="buttonWrapper">
                    <button className="moreBtn" onClick={handleMoreClick}>More</button>
                </div>
            </div>
        </div>
    );
}
