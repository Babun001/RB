import { useState } from 'react';
import { motion } from 'framer-motion';
import './HomePageCss/PackagesSection.css';
import diabetes from '../../Assets/diabetes.png';
import cardio from '../../Assets/cardio.png';
import hyperTension from '../../Assets/hypertension.png';
import gut from '../../Assets/gut.png';
import bone from '../../Assets/bone.png';
import alcohol from '../../Assets/alcohol.png';
import cancer from '../../Assets/cancer.png';
import Depression from '../../Assets/depression.png';
import AnimatedText from '../../AnimatedText';

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

    // Framer motion variants
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <div className="packageContainer">
            <div className="packageUpperSection">
                <h4 className="rb-headingTag pk-tag">Packages</h4>
                <AnimatedText tag="h2" type="chars" y={30} className="rb-title pk-title">
                    Lifestyle Packages
                </AnimatedText>
            </div>

            <motion.div
                className="packageLowerSection"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {visibleDiseases.map((item, index) => (
                    <motion.div
                        key={index}
                        className="diseaseCardSection"
                        variants={cardVariants}
                        whileHover={{
                            y: -6,
                            transition: {
                                type: 'tween',
                                duration: 0.1,
                                ease: 'easeOut'
                            }
                        }}
                    >
                        <img src={item.img} alt={item.DiseaseName} />
                        <div className="diseaseName">
                            <p>{item.DiseaseName}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>


            {/* Toggle Buttons */}
            {diseaseData.length > 8 && (
                <div className="viewMoreContainer">
                    <button className="viewMoreBtn rbdButton" onClick={() => setShowAll(!showAll)}>
                        <span className='btn-text'>{showAll ? 'View Less' : 'View All'}</span>
                    </button>
                </div>
            )}
        </div>
    );
}
