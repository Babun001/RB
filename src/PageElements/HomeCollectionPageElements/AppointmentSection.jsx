import { useState } from "react";
import './HomeCollectionCss/AppointmentSection.css';
import { FaLocationCrosshairs } from "react-icons/fa6";


import img from '../../Assets/man.png'

export default function AppointmentSection() {
  const [gender, setGender] = useState("male");

  return (
    <div className="appointment-container">
      <h2 className="appointmentHeading">Appointment</h2>
      <form className="appointment-form">

        <div className="row">
          <div className="input-group">
            <label htmlFor="mobile">Mobile No</label>
            <input type="text" id="mobile" name="mobile" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" />
          </div>

          <div className="input-group">
            <label>Gender</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                /> Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                /> Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={() => setGender("other")}
                /> Other
              </label>
            </div>
          </div>
        </div>

        <div className="input-group halfSection">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />
        </div>

        <div className="row halfSection">
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="input-group">
            <label htmlFor="landmark">Landmark</label>
            <input type="text" id="landmark" name="landmark" />
          </div>
        </div>

        <div className="row halfSection">
          <div className="input-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" />
          </div>
          <div className="input-group">
            <label htmlFor="pincode">Pin Code</label>
            <input type="text" id="pincode" name="pincode" />
          </div>
        </div>

        <div className="btnLocation halfSection">
          <button className="location-btn " type="button">
            <FaLocationCrosshairs /> Use current location
          </button>
        </div>

        <div className="row halfSection">
          <div className="input-group">
            <label htmlFor="preferredDate">Preferred Date</label>
            <input type="text" id="preferredDate" name="preferredDate" />
          </div>
          <div className="input-group">
            <label htmlFor="preferredTime">Preferred Time</label>
            <input type="text" id="preferredTime" name="preferredTime" />
          </div>
        </div>
        <div className="lowerSectionButton halfSection">
          <button className="location-btn" type="submit">Submit</button>
          <button className="resetBtn" type="button">Reset</button>
        </div>

      </form>

      <img
        className="doctor-img"
        src={img}
        alt="Doctor"
      />
    </div>
  );
}
