import React, { useState } from 'react';
import './CorporateWellnessPageCss/CorporateAndEnquirySection.css';

import { FaUser, FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedText from '../../AnimatedText';

export default function CorporateAndEnquirySection() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        company: '',
        location: '',
        services: [],
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const updatedServices = checked
                ? [...prev.services, value]
                : prev.services.filter(service => service !== value);
            return { ...prev, services: updatedServices };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        <div className="corporateAndEnquiryContainer" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', padding: '2rem' }}>
            <div className="ceLeftSection" style={{ flex: 1, minWidth: '300px' }}>
                <AnimatedText tag="h2" type="chars" y={30} className='WellnessHeading'>
                    For Corporates
                </AnimatedText>
                <p>
                    Why employee wellness is paramount for you? There’s a proven, direct connection between health and workplace productivity.
                    Good health means lesser absenteeism which in turn means greater output. Being healthy increases concentration, energy levels,
                    and ensures consistency in performance.
                </p>
                <p>
                    Regular health check-ups help detect and prevent illnesses before they strike. How we make your dream of a healthy workforce come true:
                </p>
                <p>
                    Regular health check-ups help detect and prevent illnesses before they  strike How we make your dream of a healthy workforce come true  Pre-employment Health Checks: To screen applicants for health factors  that may affect their performance levels  Customised Health Check Packages: Tailor-made preventive health packages to suit the profile of your employees and the nature of your business  Onsite Corporate Health Camps: Health camps specifically designed to  tackle commonly reported health issues and delivered by specialists  Health Risk Assessment: A systematic evaluation of your employees  lifestyle to determine potential risk factors for their short-term and  long term health  Vaccination Program:
                </p>

                <p>
                    A unique prevention program that includes  vaccination packages to protect employees from around 20 diseases  Why RB is your best corporate health partner  10 years of healthcare excellence Pioneer and leader in preventive healthcare Wide range of programs and packages Healthier your staff, rosier your business prospects.  For details please email us at corporate@rbdiagnostics.com Why employee wellness is paramount for you?There's a proven, direct  connection between health and workplace productivity Good health means lesser absenteeism which in turn means greater output Being healthy increases concentration, energy levels and ensures  consistency in performance.
                </p>

                <p>
                    Regular health check-ups help detect and prevent illnesses before they  strike How we make your dream of a healthy workforce come true  Pre-employment Health Checks: To screen applicants for health factors  that may affect their performance levels  Customised Health Check Packages: Tailor-made preventive health packages to suit the profile of your employees and the nature of your business  Onsite Corporate Health Camps: Health camps specifically designed to  tackle commonly reported health issues and delivered by specialists  Health Risk Assessment: A systematic evaluation of your employees  lifestyle to determine potential risk factors for their short-term and  long term health  Vaccination Program: A unique prevention program that includes  vaccination packages to protect employees from around 20 diseases  Why RB is your best corporate health partner  10 years of healthcare excellence Pioneer and leader in preventive healthcare Wide range of programs and packages Healthier your staff, rosier your business prospects.  For details please email us at corporate@rbdiagnostics.com
                </p>
            </div>

            <div className="ceRightSectionContent">
                <AnimatedText tag="h2" type="chars" y={30}>
                    Enquiry Form
                </AnimatedText>
                <div className="ceRightSection">
                    <form onSubmit={handleSubmit} className="enquiryForm">

                        <div className="input-icon-group">
                            <FaUser className="input-icon" />
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                        </div>

                        <div className="input-icon-group">
                            <FaPhoneAlt className="input-icon" />
                            <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleInputChange} required />
                        </div>

                        <div className="input-icon-group">
                            <IoMdMail className="input-icon" />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                        </div>

                        <div className="input-icon-group">
                            <FaBuilding className="input-icon" />
                            <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} />
                        </div>

                        <div className="input-icon-group">
                            <FaLocationDot className="input-icon" />
                            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} />
                        </div>

                        <label className="form-label">Service Required*</label>
                        <div className="checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Pre-employment Check-up"
                                    onChange={handleCheckboxChange}
                                    checked={formData.services.includes("Pre-employment Check-up")}
                                />
                                Pre-employment Check-up
                            </label>

                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Annual Health Checkup"
                                    onChange={handleCheckboxChange}
                                    checked={formData.services.includes("Annual Health Checkup")}
                                />
                                Annual Health Checkup
                            </label>

                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Others"
                                    onChange={handleCheckboxChange}
                                    checked={formData.services.includes("Others")}
                                />
                                Others
                            </label>
                        </div>


                        <textarea className='message' name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleInputChange}></textarea>

                        <button type="submit" style={{
                            backgroundColor: '#0ca9a3',
                            color: '#fff',
                            padding: '0.75rem 2rem',
                            border: 'none',
                            borderRadius: '25px',
                            marginTop: '1rem',
                            cursor: 'pointer'
                        }}>
                            Submit
                        </button>

                    </form>

                </div>

            </div>
        </div>
    );
}
