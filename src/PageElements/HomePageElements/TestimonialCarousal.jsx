import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePageCss/TestimonialCarousal.css';

const users = [
    {
        img: "https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.jpg?s=612x612&w=0&k=20&c=lZoxAGwQd_IL1p50R6FCXwbKtofoSuknmAKJod6OkzQ=",
        name: "Priyanka Das",
        recedential: "Salt Lake",
        comments:
            "RB Diagnostic has consistently delivered prompt and reliable reports. The staff is courteous and professional, and their centres are always well-organised. I feel confident trusting them with my family’s healthcare needs."
    },
    {
        img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
        name: "Rajat Ghosh",
        recedential: "Garia",
        comments:
            "Their home collection service is a lifesaver for working professionals like me. The technician was punctual, polite, and followed all hygiene protocols. The reports arrived on time and were easy to access online."
    },
    {
        img: "https://t4.ftcdn.net/jpg/04/59/85/07/360_F_459850779_582p4mR7RTtvBFavIZlcpADdgLzeYlyo.jpg",
        name: "Sutapa Roy",
        recedential: "Behala",
        comments:
            "I’ve visited multiple diagnostic centres before, but RB Diagnostic stands out for its efficiency and transparency. From registration to consultation, everything was smooth and hassle-free."
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1682089787056-9ac0c78a2ac2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
        name: "Animesh Dutta",
        recedential: "Dum Dum",
        comments:
            "What impressed me most was the speed and accuracy of their reporting. The lab staff explained everything clearly, and I got my reports the same day without any confusion."
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1682089841647-458dd29dc0ee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
        name: "Sutapa Roy",
        recedential: "Behala",
        comments:
            "Diagnostic stands out for its efficiency and transparency. From registration to consultation, everything was smooth and hassle-free."
    },
    {
        img: "https://www.shutterstock.com/shutterstock/videos/1040604956/thumb/1.jpg?ip=x480",
        name: "Rajat Ghosh",
        recedential: "Garia",
        comments:
            "Their home collection service is a lifesaver for working professionals like me. The technician was punctual, polite, and followed all hygiene protocols. The reports arrived on time and were easy to access online."
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1682089841647-458dd29dc0ee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
        name: "Sutapa Roy",
        recedential: "Behala",
        comments:
            "I’ve visited multiple diagnostic centres before, but RB Diagnostic stands out for its efficiency and transparency. From registration to consultation, everything was smooth and hassle-free."
    },
    {
        img: "https://st2.depositphotos.com/23255830/46761/i/450/depositphotos_467615556-stock-photo-teenager-boy-portrait-wearing-coloring.jpg",
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
export { users };
