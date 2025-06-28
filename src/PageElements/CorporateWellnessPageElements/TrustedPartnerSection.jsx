
import Slider from "react-slick";
import './CorporateWellnessPageCss/TrustedPartnerSection.css';

import img1 from '../../Assets/wipro.png';
import img2 from '../../Assets/tcs.png';
import img3 from '../../Assets/itc.png';

import AnimatedText from "../../AnimatedText";


const partners = [
    { name: "IndianOil", img: img1 },
    { name: "Bharat Petroleum", img: img2 },
    { name: "HP", img: img3 },
    { name: "ITC", img: img1 },
    { name: "ADP", img: img3 },
    { name: "Deloitte", img: img1 },
    { name: "Accenture", img: img2 },
    { name: "TCS", img: img1 },
    { name: "Hyundai", img: img2 },
];



export default function TrustedPartnerSection() {
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    return (
        <div className="partner-section">
            <AnimatedText tag="h2" type="chars" y={30} className="WellnessHeading">
                Our Trusted Partner
            </AnimatedText>

            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index} className="partner-logo">
                        <img src={partner.img} alt={partner.name} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}