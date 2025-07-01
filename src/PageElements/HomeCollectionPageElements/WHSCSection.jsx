import bgPng from '../../Assets/takingSample.png'
import './HomeCollectionCss/WHSCSection.css';
import AnimatedText from '../../AnimatedText';
export default function WHSCSection() {
    return (
        <>
            <div className="whscContainer">
                <div className="whscLeftSection">
                    <img className='image-bg' src={bgPng} alt="png" />
                </div>
                <div className="whscRightSection">
                    <AnimatedText tag="h2" type="chars" y={30} className='rb-title whsc-title'>
                        What is Home Sample Collection?
                    </AnimatedText>
                    {/* <h2 className='rb-title whsc-title'>What is Home Sample Collection?</h2> */}
                    <div className="whscMiddleText">
                        <p>Home sample collection is a convenient service that allows you to have your medical samples collected from the comfort of your home. </p>
                        <p>A trained phlebotomist visits your residence at a scheduled time to collect the necessary samples, which are then transported to our certified laboratories for analysis.</p>
                    </div>
                    <div className="whscLowerText">
                        <ul>
                            <li>Individuals with limited monility or chronic conditions.</li>
                            <li>Busy professionals seeking time-efficient health checkups.</li>
                            <li>Elderly patients requiring regular monitoring</li>
                            <li>Anyone prefering the privacy and comfort of home-based services.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}