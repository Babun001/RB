import './HomePageCss/TestimonialSection.css';
import TestimonialCarousel from './TestimonialCarousal';
export default function TestimonialSection() {


    return (
        <>
            <div className="testimonialContainer">
                <h2 className="rb-title">Client Testimonial</h2>
                <div className="testimonialMiddleSection">
                    <TestimonialCarousel />
                </div>
                <div className="testimonialLowerSection">
                    <div className="videoSection">
                        <video controls className="responsiveVideo">
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="testimonialTextSection">
                        <div className="testimonialTextCircleDiv">
                            
                        </div>
                        <p style={{margin:"0"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere delectus exercitationem ducimus fugiat
                            aliquid iste vero deleniti cum a. Eligendi cumque eos, architecto placeat ex expedita voluptatem
                            repellendus? Quos?
                        </p>
                    </div>
                    <div className="testimonianlButton">
                        <div className="buttonWrapper">
                            <button>Lorem Ipsum</button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}