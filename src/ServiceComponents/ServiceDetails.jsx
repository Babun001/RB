import { useEffect, useState } from "react";
import ServiceData from "../DB/ServiceData";
import './ServiceComponentsCSS/ServiceDetails.css';

export default function ServiceDetails({ serviceName }) {
    const [introLength, setIntroLength] = useState(0);

    useEffect(() => {
        if (ServiceData[serviceName]?.intro) {
            setIntroLength(ServiceData[serviceName].intro.length);
        }
    }, [serviceName]); // add dependency so it runs when serviceName changes

    const service = ServiceData[serviceName];

    if (!service) {
        return <p>Service not found.</p>;
    }

    return (
        <div className="right-content">
            <h2 className="section-heading">About {serviceName} Tests</h2>

            {introLength > 0 && (
                <div className="ServiceIntroSection">
                    <p>{service.intro}</p>
                </div>
            )}

            {service.services.map((test, i) => (
                <section className="test-details-block" key={i}>
                    <div className={`test-content ${i % 2 === 0 ? 'normal' : 'reverse'}`}>
                        <div className="test-text ">
                            <h3 className="test-title rb-headingTag service-headingTag" style={{ color: test.color }}>{test.title}</h3>
                            <p>{test.description}</p>
                        </div>
                        <div className="test-image">
                            <img src={test.image} alt={test.title} />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
