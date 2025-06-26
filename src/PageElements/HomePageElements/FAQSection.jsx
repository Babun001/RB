import './HomePageCss/FAQSection.css';

import AnimatedText from '../../AnimatedText';

export default function FAQSectionSection() {
    const Qs = [
        {
            name: "Career"
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
                            <div className="qus" key={indx}>
                                <p><span>+</span> {q.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}