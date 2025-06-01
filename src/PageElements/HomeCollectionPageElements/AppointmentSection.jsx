import { useState } from "react";
import './HomeCollectionCss/AppointmentSection.css';
export default function AppointmentSection(){

    const [gender, setGender] = useState("male");

    return(
        <>
        <div className="appointment-container">
      <h2 className="appointmentHeading">Appointment</h2>
      <form className="appointment-form">
        <div className="row">
          <input type="text" placeholder="Mobile No" />
          <input type="email" placeholder="Mail ID" />
        </div>
        <div className="row">
          <input type="date" placeholder="Date Of Birth" />
          <div className="gender-group">
            <label>Gender</label>
            <div>
              <label><input type="radio" value="male" checked={gender === "male"} onChange={() => setGender("male")} /> Male</label>
              <label><input type="radio" value="female" checked={gender === "female"} onChange={() => setGender("female")} /> Female</label>
              <label><input type="radio" value="other" checked={gender === "other"} onChange={() => setGender("other")} /> Other</label>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Address" />
        <div className="row">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Land mark" />
        </div>
        <div className="row">
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Pin Code" />
        </div>
        <button className="location-btn" type="button">
          <span role="img" aria-label="location">⚙️</span> use current location
        </button>
      </form>

      <img
        className="doctor-img"
        src="https://i.ibb.co/WksKq2p/doctor-placeholder.png"
        alt="Doctor"
      />
    </div>
        </>
    )
}