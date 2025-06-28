import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

import './ServiceComponentsCSS/ServiceBody.css';

import ServiceList from '../DB/AllServicesList';
import ServiceDetails from './ServiceDetails';

export default function ServiceBody({ serviceName }) {
    return (
        <>
            <div className="serviceBody-wrapper">

                <ServiceDetails
                    serviceName={serviceName}
                />

                <div className="left-sidebar">
                    <div className="services-box">
                        <h4>Other Services</h4>
                        <ul>
                            {ServiceList.map((svs, index) => (
                                <li key={index}>
                                    <Link to={`/service/${svs.path}`}>
                                        {svs.name} <span className="arrow"><GoArrowRight size={18} /></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="consult-box">
                        <h4>Book a Consultation:</h4>
                        <form>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                            <input type="tel" placeholder="Your Phone" />
                            <input type="date" />
                            <select>
                                <option>Select Service</option>
                                {ServiceList.map((svs, index) => (
                                    <option key={index} value={svs.path}>{svs.name}</option>
                                ))}
                            </select>
                            <button type="submit">Book Online</button>
                        </form>
                    </div>
                </div>

                {/* <ServiceDetails
                    serviceName = {serviceName}
                /> */}

            </div>
        </>
    );
}