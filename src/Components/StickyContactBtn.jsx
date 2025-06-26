import './ComponentsStyles/StickyContactButtons.css';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const StickyContactButtons = () => {
    return (
        <div className="sticky-buttons">
            <div className="hero-float-icons">
                <a href="tel:+918170834565" className="icon-circle" title="Call Us">
                    <FaPhone size={25} color='black'/>
                </a>
                <a href="mailto:babunroy987@gmail.com" className="icon-circle" title="Email Us">
                    <IoMdMail size={25} color='black'/>
                </a>
            </div>
        </div>
    );
};

export default StickyContactButtons;
