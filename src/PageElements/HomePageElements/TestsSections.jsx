import './HomePageCss/TestsSections.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

import heartImg from '../../Assets/disease/Heart.png';
import kidneyImg from '../../Assets/disease/Kidney.png';
import lungsImg from '../../Assets/disease/Lungs.png';
import thyroidImg from '../../Assets/disease/Thyroid.png';
import liverImg from '../../Assets/disease/Liver.png';
import spinalImg from '../../Assets/disease/spinal Disc.png';

import AnimatedText from '../../AnimatedText';

export default function TestsSections() {
    const [showAll, setShowAll] = useState(false);

    const testData = [
        { name: "Heart", link: "#", img: heartImg },
        { name: "Kidney", link: "#", img: kidneyImg },
        { name: "Lungs", link: "#", img: lungsImg },
        { name: "Thyroid", link: "#", img: thyroidImg },
        { name: "Liver", link: "#", img: liverImg },
        { name: "Spinal Disc", link: "#", img: spinalImg },
    ];

    const visibleDiseases = showAll ? testData : testData.slice(0, 6);

    // Framer Motion Variants
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
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div className="TestsContainer">
            <div className="ourPackageUpperSection">
                <h4 className="rb-headingTag pk-tag">Tests</h4>

                <AnimatedText tag="h2" type="chars" y={30} className="rb-title temp-title">
                    Explore Tests by Organ for Smarter Health Screening
                </AnimatedText>

                <AnimatedText tag="p" type="words" y={-20} className="paraText abc">
                    At RB Diagnostic, we offer an extensive range of tests covering all major health parameters. From routine screenings to advanced diagnostics,
                </AnimatedText>
                <AnimatedText tag="p" type="words" y={-20} className="paraText abc">
                    our tests are designed to deliver accurate results with the highest precision—empowering you and your doctor to make informed health decisions at every step.
                </AnimatedText>
            </div>

            <motion.div
                className="diseaseSectionExplore"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {visibleDiseases.map((d, indx) => (
                    <motion.div
                        className="cardDiseaseSection"
                        key={indx}
                        variants={cardVariants}
                        whileHover={{
                            transition: { type: 'spring', stiffness: 300, damping: 18 },
                        }}
                    >
                        <img src={d.img} alt={d.name} />
                        <h2>{d.name}</h2>
                        <p className="linksDieases">
                            <a href={d.link}>Explore Now</a>
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {testData.length > 6 && (
                <div className="viewMoreContainer">
                    <button
                        className="viewMoreBtn"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "View Less" : "View All"}
                    </button>
                </div>
            )}
        </div>
    );
}
