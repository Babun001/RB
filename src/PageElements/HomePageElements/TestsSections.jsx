import './HomePageCss/TestsSections.css'
import { useState } from 'react';

import heartImg from '../../Assets/disease/Heart.png';
import kidneyImg from '../../Assets/disease/kidney.png';
import lungsImg from '../../Assets/disease/Lungs.png';
import thyroidImg from '../../Assets/disease/Thyroid.png';
import liverImg from '../../Assets/disease/Liver.png';
import spinalImg from '../../Assets/disease//spinal Disc.png';


export default function TestsSections() {

    const [showAll, setShowAll] = useState(false);


    const testData = [
        { name: "Heart", link: "#", img: heartImg },
        { name: "Kidney", link: "#", img: kidneyImg },
        { name: "Lungs", link: "#", img: lungsImg },
        { name: "Thyroid", link: "#", img: thyroidImg},
        { name: "Liver", link: "#", img: liverImg },
        { name: "Spinal Disc", link: "#", img: spinalImg },
        { name: "Liver", link: "#", img: liverImg },
        { name: "Spinal Disc", link: "#", img: spinalImg },
        { name: "Liver", link: "#", img: liverImg },
        { name: "Spinal Disc", link: "#", img: spinalImg },
        
    ]
    const visibleDiseases = showAll ? testData : testData.slice(0, 6);

    return (
        <>
            <div className="TestsContainer">
                <div className="ourPackageUpperSection">
                    <h4 className="rb-headingTag pk-tag">TESTS</h4>
                    <h2 className="rb-title temp-title">Explore Tests by Organ for Smarter Health Screening</h2>
                    <p className="paraText abc">
                        At RB Diagnostic, we offer an extensive range of tests convering all major health parameters. From routine screenings to advanced diagnostics,
                    </p>
                    <p className="paraText abc">
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