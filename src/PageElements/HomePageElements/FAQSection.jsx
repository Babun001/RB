import './HomePageCss/FAQSection.css';

export default function FAQSectionSection(){
    const Qs = [
        {
            name:"Career"
        },
        {
            name:"General Queries"
        },
        {
            name:"Home Collection"
        },
        {
            name:"Reports and Payments"
        },
        {
            name:"Test Related Queries"
        },
        {
            name:"Ultrasound"
        },
        {
            name:"Vaccination"
        }
    ]
    return(
        <>
            <div className="faqContainer">
                <div className="faqUpperSection">
                    <h1>Frequently Asked Questions (FAQs)</h1>
                </div>
                <div className="questionsSection">
                    {
                        Qs.map((q,indx) =>(
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