import Slider from 'react-slick';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import './HomePageCss/FirstSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../Assets/background01.png';
import img2 from '../../Assets/background01.png';

const images = [img1,img2];

const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

const FirstSection = () => {
    return (
        <div className="hero-slider-container" style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden' }}>
            {/* Slider Images */}
            <Slider {...sliderSettings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div
                            className="slider-image"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '700px',
                                borderRadius:"2rem"
                            }}
                        />
                    </div>
                ))}
            </Slider>

            {/* Fixed Overlay */}
            <div className="hero-fixed-overlay">
                <div className="scrolling-text-wrapper">
                    <div className="scrolling-text-inner">
                        <div className="scrolling-text">
                            Consult top doctors <span role="img" aria-label="medal">🏅</span> Online Health
                        </div>
                    </div>
                </div>

                <div className="hero-float-icons">
                    <div className="icon-circle">
                        <FaPhone title='Phone' size={25} />
                    </div>
                    <div className="icon-circle">
                        <IoMdMail title="Mail" size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
