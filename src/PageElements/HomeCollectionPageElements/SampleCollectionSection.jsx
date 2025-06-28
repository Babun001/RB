
import './HomeCollectionCss/SampleCollectionSection.css';
import curvePng from '../../Assets/curveLine.png'
import AnimatedText from '../../AnimatedText';

export default function SampleCollectionSection() {
    return (
        <>
            <div className="sampleCollectionContainer">
                <div className="sampleCollectionUpperSection">
                    <h4 className="rb-headingTag pk-tag long-heading">Bringing Quality Healthcare to Your Doorstep</h4>
                    <AnimatedText tag="h2" type="chars" y={30} className="rb-title pk-title hc-title">
                        Home Sample Collection Process
                    </AnimatedText>

                </div>

                <img className='curvePng' src={curvePng} alt="" />

                <div className="sampleCollectionLowerSection">

                    <div className="processTextArea firstTextArea">
                        <h3 className='indexing index1'>1</h3>
                        <h3 className='indexHeadline'>Schedule an Appointment</h3>
                        <p>Fill out the form to schedule your home sample collection. Our team will get in touch to confirm your appointment.</p>
                    </div>
                    <div className="processTextArea secondTextArea">
                        <h3 className='indexing index2'>2</h3>
                        <h3 className='indexHeadline'>Sample Collection</h3>
                        <p>Our certified phlebotomist arrives at your doorstep at the scheduled time, equipped with sterile, single-use kits to collect your samples safely.</p>
                    </div>
                    <div className="processTextArea thirdTextArea">
                        <h3 className='indexing index3'>3</h3>
                        <h3 className='indexHeadline'>Laboratory Analysis</h3>
                        <p>Collected samples are transported under controlled conditions to our NABL-accredited labs for processing.</p>
                    </div>
                    <div className="processTextArea fourthTextArea">
                        <h3 className='indexing index4'>4</h3>
                        <h3 className='indexHeadline'>Receive Results</h3>
                        <p>Access your test results promptly via email or through our secure online portal.</p>
                    </div>
                </div>
            </div>


        </>
    )
}