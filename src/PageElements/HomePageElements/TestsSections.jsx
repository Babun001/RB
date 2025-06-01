import './HomePageCss/TestsSections.css'
import { useState } from 'react';
export default function TestsSections() {

    const [showAll, setShowAll] = useState(false);


    const testData = [
        { name: "Heart", link: "#", img: "" },
        { name: "Kidney", link: "#", img: "" },
        { name: "Lungs", link: "#", img: "" },
        { name: "Thyroid", link: "#", img: "" },
        { name: "Liver", link: "#", img: "" },
        { name: "Spinal Disc", link: "#", img: "" },
        { name: "Thyroid", link: "#", img: "" },
        { name: "Liver", link: "#", img: "" },
        { name: "Spinal Disc", link: "#", img: "" },
        { name: "Thyroid", link: "#", img: "" },
        { name: "Liver", link: "#", img: "" },
        { name: "Spinal Disc", link: "#", img: "" },
    ]
    const visibleDiseases = showAll ? testData : testData.slice(0, 6);

    return (
        <>
            <div className="TestsContainer">
                <div className="ourPackageUpperSection">
                    <h4 className="rb-headingTag pk-tag">TESTS</h4>
                    <h2 className="rb-title temp-title">Explore Tests by Organ for Smarter Health Screening</h2>
                    <p className="paraText">
                        At RB Diagnostic, we offer an extensive range of tests convering all major health parameters. From routine screenings to advanced diagnostics,
                    </p>
                    <p className="paraText">
                        our tests are designed to deliver accurate results with the highest precision -empowering you and your doctor to make informed health decisions at every step..
                    </p>
                </div>
                <div className="diseaseSectionExplore">
                    {
                        visibleDiseases.map((d, indx) => (
                            <div className="cardDiseaseSection" key={indx}>
                                <img src="https://i.pinimg.com/1200x/46/97/cd/4697cd238531208a7783b70e42070625.jpg" alt="" />
                                <h2>{d.name}</h2>
                                <p className="linksDieases">
                                    <a href={d.link}>Explore Now</a>
                                </p>
                            </div>
                        ))
                    }
                </div>
                {!showAll && testData.length > 6 && (
                <div className="viewMoreContainer">
                    <button className="viewMoreBtn" onClick={() => setShowAll(true)}>View All</button>
                </div>
            )}
            </div>
        </>
    )
}