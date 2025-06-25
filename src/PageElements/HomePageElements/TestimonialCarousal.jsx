import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePageCss/TestimonialCarousal.css';

const users = [
    {
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        name: "Priyanka Das",
        recedential: "Salt Lake",
        comments:
            "RB Diagnostic has consistently delivered prompt and reliable reports. The staff is courteous and professional, and their centres are always well-organised. I feel confident trusting them with my family’s healthcare needs."
    },
    {
        img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg",
        name: "Rajat Ghosh",
        recedential: "Garia",
        comments:
            "Their home collection service is a lifesaver for working professionals like me. The technician was punctual, polite, and followed all hygiene protocols. The reports arrived on time and were easy to access online."
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        name: "Sutapa Roy",
        recedential: "Behala",
        comments:
            "I’ve visited multiple diagnostic centres before, but RB Diagnostic stands out for its efficiency and transparency. From registration to consultation, everything was smooth and hassle-free."
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        name: "Animesh Dutta",
        recedential: "Dum Dum",
        comments:
            "What impressed me most was the speed and accuracy of their reporting. The lab staff explained everything clearly, and I got my reports the same day without any confusion."
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        name: "Sutapa Roy",
        recedential: "Behala",
        comments:
            "dfa afaf adfasd 32rqerg refery Diagnostic stands out for its efficiency and transparency. From registration to consultation, everything was smooth and hassle-free.  asdf adsf adsf asdf asdfads fasd fasdfadsfasdf adsf adsf asdf asdfads fasd fasdfadsfasdf adsf adsf asdf asdfads fasd fasdfadsf"
    },
    {
        img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg",
        name: "Rajat Ghosh",
        recedential: "Garia",
        comments:
            "Their home collection service is a lifesaver for working professionals like me. The technician was punctual, polite, and followed all hygiene protocols. The reports arrived on time and were easy to access online."
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        name: "Sutapa Roy",
        recedential: "Behala",
        comments:
            "I’ve visited multiple diagnostic centres before, but RB Diagnostic stands out for its efficiency and transparency. From registration to consultation, everything was smooth and hassle-free."
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        name: "Animesh Dutta",
        recedential: "Dum Dum",
        comments:
            "What impressed me most was the speed and accuracy of their reporting. The lab staff explained everything clearly, and I got my reports the same day without any confusion."
    },
];

const TestimonialCarousel = ({ onSlideChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentIndex(newIndex);
            if (onSlideChange) {
                onSlideChange(users[newIndex]);
            }
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-container">
            <Slider {...settings}>
                {users.map((user, index) => (
                    <div className="image-card" key={index}>
                        <img src={user.img} alt={`user-${index}`} className="testimonial-img" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;
export { users }; // Export users for initial state if needed
