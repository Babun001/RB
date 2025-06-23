// DoctorDetailsPageWrapper.jsx
import { useParams, useNavigate } from "react-router-dom";
import doctors from "../../DB/DoctorsDetails";
import DoctorDetailsPage from "./DoctorDetailsPage";

export default function DoctorDetailsPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) return <h2>Doctor not found</h2>;

  return <DoctorDetailsPage doctor={doctor} onClose={() => navigate(-1)} />;
}
