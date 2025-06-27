import React, { useState } from 'react';
import './HomePageCss/TestimonialSection.css';
import TestimonialCarousel, { users } from './TestimonialCarousal';

export default function TestimonialSection() {
    const [activeTestimonial, setActiveTestimonial] = useState(users[0]);

    const getTrimmedComment = (comment) => {
        return comment.length > 30 ? comment.slice(0, 150) + '...' : comment;
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
                        <source 
                            src="https://www.w3schools.com/html/mov_bbb.mp4" 
                            type="video/mp4" 
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="testimonialTextSection">
                    <div className="testimonialTextCircleDiv">
                        {/* Optional profile circle or initials */}
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
