import './HomePageCss/FAQSection.css';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import AnimatedText from '../../AnimatedText';

export default function FAQSectionSection() {

    const navigator = useNavigate();

    const Qs = [
        {
            name: "Career",
        },
        {
            name: "General Queries"
        },
        {
            name: "Home Collection"
        },
        {
            name: "Reports and Payments"
        },
        {
            name: "Test Related Queries"
        },
        {
            name: "Ultrasound"
        },
        {
            name: "Vaccination"
        }
    ]

    const handleLinkOn = (e) =>{
        e.preventDefault;
        navigator("/faqs")
    }
    return (
        <>
            <div className="faqContainer">
                <div className="faqUpperSection">
                    <AnimatedText tag="h1" type="chars" y={30}>
                        Frequently Asked Questions (FAQs)
                    </AnimatedText>
                </div>
                <div className="questionsSection">
                    {
                        Qs.map((q, indx) => (
                            <div className="qus" key={indx} onClick={handleLinkOn}>
                                
                                <p><span>+</span> {q.name}</p>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}