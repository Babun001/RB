import React, { useState } from 'react';
import './PatientRegisterForm.css';

export default function PatientRegisterForm() {
    const [formData, setFormData] = useState({
        mobile: '',
        firstName: '',
        lastName: '',
        email: '',
        alternateMobile: '',
        gender: 'Male',
        address: '',
        landmark: '',
        state: '',
        city: '',
        pincode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit to backend
    };

    return (
        <div className="form-container">
            <form className="patient-form" onSubmit={handleSubmit}>
                <div className="form-row full-width">
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row align-start">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="alternateMobile"
                        placeholder="Alternate Mobile No"
                        value={formData.alternateMobile}
                        onChange={handleChange}
                    />
                    <div className="gender-block">
                        <label className="gender-label">Gender</label>
                        <div className="gender-options">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                /> Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                /> Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === "Other"}
                                    onChange={handleChange}
                                /> Other
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-row full-width">
                    <textarea
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row full-width">
                    <input
                        type="text"
                        name="landmark"
                        placeholder="Landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row full-width">
                    <button type="submit" className="submit-btn">Register</button>
                </div>

                <div className="form-footer">
                    <p>Already Registered? <a href="/login">login now</a></p>
                </div>
            </form>
        </div>
    );
}
