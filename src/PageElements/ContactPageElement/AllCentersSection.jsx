import CenterDetails from "../../DB/CenterDetails";
import './ContactPageElementsCss/AllCentersSection.css';

export default function AllCentersSection() {
    return (
        <div className="center-wrapper">
            <h2 className="center-heading">All Centers</h2>
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
                            <p><strong>Address</strong><br />{center.address}</p>
                            <p><strong>Phone</strong> - {center.phone}</p>
                            <p className="center-directions">Get Directions <span>🧭</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}