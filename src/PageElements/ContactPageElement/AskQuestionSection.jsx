
import './ContactPageElementsCss/AskAQuestion.css';
import doctorImg from '../../Assets/doctorPng (1).webp';
import AnimatedText from '../../AnimatedText';

export default function AskQuestionSection() {
    return (
        <div className="ask-question-container">
            <div className="ask-img-section">
                <img src={doctorImg} alt="Doctor" />
            </div>
            <div className="ask-form-section">
                <AnimatedText tag="h2" type="chars" y={30} className='rb-title'>
                   Ask a Question
                </AnimatedText>
                
                <p className='RB-para-text'>If you have any question, you can contact us, please, fill out the form below</p>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="textarea-group">
                        {/* <label>Message</label> */}
                        <textarea rows="5" placeholder="Your message here..." />
                    </div>
                    <button type="submit" className='rbdButton messageSendBtn'><span className='btn-text'>Send Message</span></button>
                </form>
            </div>
        </div>
    )
}