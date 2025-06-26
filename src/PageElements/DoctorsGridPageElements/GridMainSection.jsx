import { useState } from 'react';
import DoctorCard from './DoctorCards';
import { FaCheck, FaTimes } from "react-icons/fa";
import './DoctorsGridPageCss/GridMainSection.css';
import doctors from '../../DB/DoctorsDetails';
import DoctorsGridFirstSection from './DoctorGridFirstSection';

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


export default function GridMainSection() {
    const [price, setPrice] = useState(200);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMoreSpecialties, setShowMoreSpecialties] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [searchFilters, setSearchFilters] = useState({ doctorName: '', department: '' });




    const [openFilters, setOpenFilters] = useState({
        specialties: true,
        gender: false,
        availability: false,
        pricing: false,
        experience: false,
        consultation: false,
        rating: false,
    });

    const toggleFilter = (key) => {
        setOpenFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const doctorsPerPage = 12;

    const doctorsDetails = doctors;



    const filteredDoctors = isChecked
        ? doctorsDetails.filter((doc) => doc.availability)
        : doctorsDetails;

    const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const allSpecialties = [
        "Diabetologist", "Cardiologist", "Orthopedic", "Dermatologist", "ENT",
        "Neurologist", "Gynaecologist", "Cardiologist", "Orthopedic", "Dermatologist",
        "ENT", "Neurologist"
    ];

    const displayedSpecialties = showMoreSpecialties ? allSpecialties : allSpecialties.slice(0, 7);

    return (
        <div className="gridMainContainer">
            <div className="gridMainLeftSection">
                <div className="filter-box">
                    <div className="filter-box-header">
                        <div className="filterUpperText">
                            <p>Filter</p>
                            <p style={{ textDecoration: "underline" }}>Clear All</p>
                        </div>
                    </div>
                    <input type="text" placeholder="Search doctor..." className="filter-search" />
                    <hr />

                    {/* Specialties */}
                    <div className="filter-section">
                        <div className="filter-header" onClick={() => toggleFilter('specialties')}>
                            <label style={{ color: "black" }}>Specialties</label>
                            <span className="arrow">{openFilters.specialties ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openFilters.specialties && (
                            <div className="checkbox-group">
                                {displayedSpecialties.map((specialty, index) => (
                                    <label key={index}><input type="checkbox" /> {specialty}</label>
                                ))}
                                {!showMoreSpecialties && (
                                    <p className="view-more-btn" onClick={() => setShowMoreSpecialties(true)}>
                                        View More...
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                    <hr />

                    {/* Gender */}
                    <div className="filter-section">
                        <div className="filter-header" onClick={() => toggleFilter('gender')}>
                            <label style={{ color: "black" }}>Gender</label>
                            <span className="arrow">{openFilters.gender ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openFilters.gender && (
                            <div className="checkbox-group">
                                <label><input type="checkbox" /> Male</label>
                                <label><input type="checkbox" /> Female</label>
                                <label><input type="checkbox" /> Others</label>
                            </div>
                        )}
                    </div>
                    <hr />

                    {/* Availability */}
                    <div className="filter-section">
                        <div className="filter-header" onClick={() => toggleFilter('availability')}>
                            <label style={{ color: "black" }}>Availability</label>
                            <span className="arrow">{openFilters.availability ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openFilters.availability && (
                            <div className="checkbox-group">
                                <label><input type="checkbox" /> Today</label>
                                <label><input type="checkbox" /> Tomorrow</label>
                                <label><input type="checkbox" /> After Tomorrow</label>
                                <label><input type="checkbox" /> +3 Days</label>
                                <label><input type="checkbox" /> View more...</label>
                            </div>
                        )}
                    </div>
                    <hr />

                    {/* Pricing */}
                    <div className="filter-section">
                        <div className="filter-header" onClick={() => toggleFilter('pricing')}>
                            <label style={{ color: "black" }}>Pricing (${price})</label>
                            <span className="arrow">{openFilters.pricing ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openFilters.pricing && (
                            <input
                                type="range"
                                min="200"
                                max="5005"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="filter-range"
                            />
                        )}
                    </div>
                    <hr />

                    {/* Experience */}
                    <div className="filter-section">
                        <div className="filter-header" onClick={() => toggleFilter('experience')}>
                            <label style={{ color: "black" }}>Experience</label>
                            <span className="arrow">{openFilters.experience ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openFilters.experience && (
                            <div className="checkbox-group">
                                <label><input type="checkbox" /> 2+ years</label>
                                <label><input type="checkbox" /> 5+ years</label>
                                <label><input type="checkbox" /> 8+ years</label>
                                <label><input type="checkbox" /> 10+ years</label>
                                <label><input type="checkbox" /> 15+ years</label>
                                <label><input type="checkbox" /> 20+ years</label>
                                <label><input type="checkbox" /> View more...</label>
                            </div>
                        )}
                    </div>
                    <hr />

                    {/* Consultation Types */}
                    <div className="filter-section">
                        <div className="filter-header" onClick={() => toggleFilter('consultation')}>
                            <label style={{ color: "black" }}>Consultation Types</label>
                            <span className="arrow">{openFilters.consultation ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openFilters.consultation && (
                            <div className="checkbox-group">
                                <label><input type="checkbox" /> Audio Call</label>
                                <label><input type="checkbox" /> Video Call</label>
                                <label><input type="checkbox" /> Instant Counselling</label>
                                <label><input type="checkbox" /> Chat</label>
                            </div>
                        )}
                    </div>
                    <hr />

                    {/* Rating */}
                    <div className="filter-section">
                        <div className="filter-header" onClick={() => toggleFilter('rating')}>
                            <label style={{ color: "black" }}>Rating</label>
                            <span className="arrow">{openFilters.rating ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openFilters.rating && (
                            <div className="checkbox-group">
                                <label><input type="checkbox" /> 5 Star</label>
                                <label><input type="checkbox" /> 4 Star</label>
                                <label><input type="checkbox" /> 3 Star</label>
                                <label><input type="checkbox" /> 2 Star</label>
                                <label><input type="checkbox" /> 1 Star</label>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="gridMainRightSection">

                <div className="doctors-header-bar">
                    <h3 className="doctor-count">
                        Showing <span className="highlight">{filteredDoctors.length}</span> Doctors For You
                    </h3>

                    <div className="header-controls">
                        <label className="availability-switch">
                            Availability
                            <div className={`slider ${isChecked ? 'on' : ''}`} onClick={() => setIsChecked(!isChecked)}>
                                {isChecked ? <FaCheck className="icon" /> : <FaTimes className="icon" />}
                            </div>
                        </label>

                        <div className="sort-dropdown">
                            <label htmlFor="sort-select">Sort By</label>
                            <select id="sort-select">
                                <option>Price (Low to High)</option>
                                <option>Price (High to Low)</option>
                                <option>Rating</option>
                            </select>
                        </div>
                    </div>
                </div>


                {currentDoctors
                    .filter(doc => !isChecked || doc.availability)
                    .map((doc, idx) => (
                        <DoctorCard
                            key={idx}
                            id={doc.id}
                            name={doc.name}
                            specialty={doc.specialty}
                            location={doc.location}
                            availability={doc.availability}
                            rating={doc.rating}
                            fees={doc.fees}
                            imageUrl={doc.imageUrl}
                            experience={doc.experience}
                            bio={doc.bio}
                            Awards={doc.Awards}
                            experienceDetails={doc.experienceDetails}
                            availableDays={doc.availableDays}
                            contact={doc.contact}
                            languages={doc.languages}
                            reviews={doc.reviews}
                        />
                    ))}



                {filteredDoctors.length > doctorsPerPage && (
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="arrowBtn"
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={page === currentPage ? 'activePage' : ''}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="arrowBtn"
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}