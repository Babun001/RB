import CenterDetails from "../../DB/CenterDetails";
import './ContactPageElementsCss/AllCentersSection.css';
import AnimatedText from "../../AnimatedText";
import { FaDirections } from "react-icons/fa";

export default function AllCentersSection() {
    return (
        <div className="center-wrapper">
            <AnimatedText tag="h2" type="chars" y={30} className="center-heading rb-title">
                All Centers
            </AnimatedText>

            <div className="center-grid">
                {CenterDetails.map((center, index) => (
                    <div className="center-card" key={index}>
                        <div className="center-img">
                            <img
                                src={center.img}
                                alt={center.name}
                            />
                        </div>
                        <div className="center-info">
                            <h3>{center.name}</h3>
                            <p className="addressP"><strong style={{fontSize:"15px"}}>Address:</strong></p>
                            <div className="addressDiv">
                                {center.address}
                            </div>
                            <p className="phoneNoDiv"><strong style={{fontSize:"15px"}}>Phone:</strong> - {center.phone}</p>
                            <p className="center-directions">Get Directions <span><FaDirections size={15}/></span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}