import Slider from 'react-slick';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import './HomePageCss/FirstSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../Assets/bg1.jpg';
import img2 from '../../Assets/bg2.jpg';
import img3 from '../../Assets/WhyChooseUs.png';

const images = [img1,img2,img3];

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
        <div className="hero-slider-container" style={{ position: 'relative', overflow: 'hidden' }}>
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
                            }}
                        />
                    </div>
                ))}
            </Slider>
            <div className="hero-section-degins">
                {/* this is a white circle */}
                <div className="lefdeginstdiv"></div>
                {/* this is a white cube */}
                <div className="rightdegindiv"></div>
            </div>

            {/* Fixed Overlay */}
            <div className="hero-fixed-overlay">
                <div className="scrolling-text-wrapper">
                    <div className="scrolling-text-inner">
                        <div className="scrolling-text">
                            Consult top doctors <span role="img" aria-label="medal">🏅</span> Online Health
                        </div>
                    </div>
                </div>

                {/* <div className="hero-float-icons">
                    <div className="icon-circle">
                        <FaPhone title='Phone' size={25} />
                    </div>
                    <div className="icon-circle">
                        <IoMdMail title="Mail" size={25} />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default FirstSection;
