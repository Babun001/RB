import React, { useState } from 'react';
import './HomePageCss/TestimonialSection.css';
import TestimonialCarousel, { users } from './TestimonialCarousal';

export default function TestimonialSection() {
    const [activeTestimonial, setActiveTestimonial] = useState(users[0]);

    const getTrimmedComment = (comment) => {
        return comment.length > 300 ? comment.slice(0, 300) + '...' : comment;
    };

    return (
        <div className="testimonialContainer">
            <h2 className="rb-title testimonial-title">Client Testimonial</h2>

            <div className="testimonialMiddleSection">
                <TestimonialCarousel onSlideChange={setActiveTestimonial} />
            </div>

            <div className="testimonialLowerSection">
                <div className="videoSection">
                    <video controls className="responsiveVideo">
                        <source src="https://www.google.com/search?sca_esv=031453346484e3fe&rlz=1C1YTUH_enIN1157IN1157&udm=7&sxsrf=AE3TifM5P1y8RXX6CKtdRvmc_oxvcWJJnw:1750946671160&q=short+video+link&sa=X&ved=2ahUKEwjLvOvSoI-OAxV54TgGHfyKMpUQ8ccDKAJ6BAgQEAQ&biw=1536&bih=703&dpr=1.25#fpstate=ive&vld=cid:e1202e2d,vid:IyOv7Yhxaaw,st:0" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="testimonialTextSection">
                    <div className="testimonialTextCircleDiv">
                        {/* Optional: show profile circle or initials */}
                    </div>
                    <p style={{ margin: "0", fontStyle: "italic", color: "#333" }}>
                        "{getTrimmedComment(activeTestimonial.comments)}"
                    </p>
                    <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
                        - {activeTestimonial.name}, {activeTestimonial.recedential}
                    </p>
                </div>

                <div className="testimonianlButton">
                    <div className="buttonWrapper">
                        <button className='feedbackbtn'>Give Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
