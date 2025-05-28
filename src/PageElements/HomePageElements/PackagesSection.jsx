import { useState } from 'react';
import './HomePageCss/PackagesSection.css';
import diabetes from '../../Assets/diabetes.png';
import cardio from '../../Assets/cardio.png';
import hyperTension from '../../Assets/hypertension.png';
import gut from '../../Assets/gut.png';
import bone from '../../Assets/bone.png';
import alcohol from '../../Assets/alcohol.png';
import cancer from '../../Assets/cancer.png';
import Depression from '../../Assets/depression.png';

export default function PackagesSection() {
    const [showAll, setShowAll] = useState(false);

    const diseaseData = [
        { DiseaseName: "Diabetes", img: diabetes },
        { DiseaseName: "Cardiovascular Diseases", img: cardio },
        { DiseaseName: "Hyper Tension", img: hyperTension },
        { DiseaseName: "Gut Health", img: gut },
        { DiseaseName: "Bone Health", img: bone },
        { DiseaseName: "Alcohol", img: alcohol },
        { DiseaseName: "Cancer", img: cancer },
        { DiseaseName: "Depression", img: Depression },
        { DiseaseName: "Test1", img: cancer },
        { DiseaseName: "Test2", img: cancer },
        { DiseaseName: "Test3", img: cancer },
    ];

    const visibleDiseases = showAll ? diseaseData : diseaseData.slice(0, 8);

    return (
        <div className="packageContainer">
            <div className="packageUpperSection">
                <h4 className="rb-headingTag pk-tag">Packages</h4>
                <h2 className="rb-title pk-title">Lifestyle Packages</h2>
            </div>
            <div className="packageLowerSection">
                {visibleDiseases.map((item, index) => (
                    <div key={index} className="diseaseCardSection">
                        <img src={item.img} alt={item.DiseaseName} />
                        <div className="diseaseName">
                            <p>{item.DiseaseName}</p>
                        </div>
                    </div>
                ))}
            </div>
            {!showAll && diseaseData.length > 8 && (
                <div className="viewMoreContainer">
                    <button className="viewMoreBtn" onClick={() => setShowAll(true)}>View All</button>
                </div>
            )}
        </div>
    );
}
