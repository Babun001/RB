import doctors from "../../DB/DoctorsDetails";
import { useParams } from "react-router-dom";
import './DoctorsGridPageCss/DoctorDetailsPage.css';

export default function DoctorDetailsPage() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) return <h2>Doctor not found</h2>;

  const detailsTabs = [
    "Doctor Bio",
    "Experience",
    "Availability",
    "Awards",
    "Rating"
  ];

  return (

    <div className="doctorDetailsPageContainer">
      <div className="doctorDetailsPageUpperSection">
        <img src={doctor.imageUrl} alt={doctor.name} className="doctorImage" />

        <div className="doctorDetailsUpperMiddleSection">
          <h1>{doctor.name}</h1>
          <p className="statusBadge">• {doctor.availability}</p>

          <ul className="doctorHighlights">
            <li><span role="img" aria-label="specialty">⚕️</span> {doctor.specialty}</li>
            <li><span role="img" aria-label="experience">⏳</span> {doctor.experience} Yrs Exp</li>
            <li><span role="img" aria-label="location">📍</span> {doctor.location}</li>
            <li><span role="img" aria-label="fee">💰</span> ₹{doctor.fee}/- Consultant Fee</li>
          </ul>
        </div>

        <div className="doctorDetailsUpperRightSection">
          <p className="availabilityText">{doctor.daysAvailable}</p>
          <div className="ratingSection">
            <span>⭐ {doctor.rating}</span>
            <p><a href="#reviews">{doctor.reviews} Reviews</a></p>
          </div>
          <p className="doctorPhone">{doctor.phone}</p>
          <button className="bookAppointmentBtn">BOOK APPOINTMENT</button>
        </div>
      </div>

      <div className="doctorDetailsTabs">
        {detailsTabs.map((tab) => (
          <button key={tab} className="doctorTabButton">{tab}</button>
        ))}
      </div>

      <div className="doctorExperienceSection">
        {doctor.experienceHistory?.map((exp, index) => (
          <div key={index} className="experienceCard">
            <div className="expHeader">
              <img src={exp.hospitalLogo} alt={exp.hospitalName} />
              <div>
                <h4>{exp.hospitalName}</h4>
                <p>{exp.department} • {exp.location}</p>
                <p>{exp.duration}</p>
              </div>
            </div>
            <p className="expDescription">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// <div className="doctor-details-wrapper">
//   <div className="top-section">
//     <img src={doctor.imageUrl} alt={doctor.name} className="doctor-img" />
//     <div className="doctor-info">
//       <h1>{doctor.name} <span className="verified">✔</span></h1>
//       <p className="available">{doctor.available ? "• Available" : "• Unavailable"}</p>
//       <p>🩺 {doctor.specialty}</p>
//       <p>📅 {doctor.experience}</p>
//       <p>📍 {doctor.location}</p>
//       <p>💰 ₹{doctor.fees}/- Consultant Fee</p>
//       <p>📞 {doctor.contact}</p>
//       <p>📆 {doctor.availableDays}</p>
//       <p>⭐ {doctor.rating} <span className="reviews">({doctor.reviews} Reviews)</span></p>
//       <button className="book-btn">BOOK APPOINTMENT</button>
//     </div>
//   </div>

//   <div className="tab-section">
//     <button className="tab active">Doctor Bio</button>
//     <button className="tab">Experience</button>
//     <button className="tab">Availability</button>
//     <button className="tab">Awards</button>
//     <button className="tab">Rating</button>
//   </div>

//   <div className="experience-section">
//     {doctor.experienceDetails.map((exp, idx) => (
//       <div className="experience-card" key={idx}>
//         <h3>{exp.hospital}</h3>
//         <p>{exp.department && `${exp.department} • `}{exp.location}</p>
//         <p>{exp.duration} &nbsp; <strong>{exp.total}</strong></p>
//         <p>{exp.description}</p>
//       </div>
//     ))}
//   </div>
// </div>