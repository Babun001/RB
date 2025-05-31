import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePageCss/TestimonialCarousal.css';

const users = [
    { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
    { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d" },
    { img: "https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
];

const TestimonialCarousel = () => {
    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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
