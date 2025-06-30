import { useState } from "react";
import './HomeCollectionCss/AppointmentSection.css';
import { FaLocationCrosshairs } from "react-icons/fa6";
import img from '../../Assets/man.png';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    dob: '',
    gender: 'male',
    address: '',
    city: '',
    landmark: '',
    state: '',
    pincode: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      mobile: '',
      email: '',
      dob: '',
      gender: 'male',
      address: '',
      city: '',
      landmark: '',
      state: '',
      pincode: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  return (
    <div className="appointment-container">
      <h2 className="appointmentHeading">Home Collection Booking</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Mail-Id"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Gender</label>
            <div className="genderOptions">
              {["male", "female", "other"].map(g => (
                <label key={g}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  /> {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="input-group halfSection">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="row halfSection">
          <div className="input-group">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="landmark"
              name="landmark"
              placeholder="Landmark"
              value={formData.landmark}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row halfSection">
          <div className="input-group">
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">-- Select State --</option>
              {[
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
                "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
                "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
                "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
                "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
                "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
                "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
              ].map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Pin Code"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="btnLocation halfSection">
          <button className="rbdButton" type="button">
            <span className="btn-text"><FaLocationCrosshairs /> Use current location</span>
          </button>
        </div>

        <div className="row halfSection">
          <div className="input-group">
            <input
              type="text"
              id="preferredDate"
              name="preferredDate"
              placeholder="Preferred Date"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              placeholder="Preferred Time"
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="lowerSectionButton halfSection">
          <button className="rbdButton" type="submit">
            <span className="btn-text">Submit</span>
          </button>
          <button className="rbdButton reset-Btn" type="button" onClick={handleReset}>
            <span className="btn-text">Reset</span>
          </button>
        </div>
      </form>

      <img className="doctor-img" src={img} alt="Doctor" />
    </div>
  );
}
