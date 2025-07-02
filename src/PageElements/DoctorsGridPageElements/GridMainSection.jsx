import { useState } from 'react';
import DoctorCard from './DoctorCards';
import { FaCheck, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import './DoctorsGridPageCss/GridMainSection.css';
import doctors from '../../DB/DoctorsDetails';
import DoctorsGridFirstSection from './DoctorGridFirstSection';

export default function GridMainSection() {
    const [price, setPrice] = useState(10000);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMoreSpecialties, setShowMoreSpecialties] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [sortBy, setSortBy] = useState("");
    const [searchFilters, setSearchFilters] = useState({ doctorName: '', department: '' });

    const [selectedSpecialties, setSelectedSpecialties] = useState([]);
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState([]);
    const [selectedConsultations, setSelectedConsultations] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);

    const allSpecialties = [
        "Diabetologist", "Cardiologist", "Orthopaedic", "Dermatologist", "ENT",
        "Neurologist", "Gynaecologist"
    ];

    const displayedSpecialties = showMoreSpecialties ? allSpecialties : allSpecialties.slice(0, 7);

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

    const toggleSelection = (value, selectedList, setSelectedList) => {
        if (selectedList.includes(value)) {
            setSelectedList(selectedList.filter(item => item !== value));
        } else {
            setSelectedList([...selectedList, value]);
        }
    };

    const handleSearchFilters = ({ doctorName, department }) => {
        setSearchFilters({ doctorName, department });
    };

    const handleClearAll = () => {
        setSelectedSpecialties([]);
        setSelectedGenders([]);
        setSelectedExperience([]);
        setSelectedConsultations([]);
        setSelectedRatings([]);
        setSearchFilters({ doctorName: '', department: '' });
        setPrice(10000);
        setIsChecked(false);
        setSortBy("");
    };

    const doctorsPerPage = 12;

    const filteredDoctors = doctors.filter((doc) => {
        const matchesName = doc.name.toLowerCase().includes(searchFilters.doctorName.toLowerCase());
        const matchesDept = doc.specialty.toLowerCase().includes(searchFilters.department.toLowerCase());
        const matchesSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(doc.specialty);
        const matchesGender = selectedGenders.length === 0 || selectedGenders.includes(doc.gender);
        const matchesExperience = selectedExperience.length === 0 || selectedExperience.some(min => doc.experience >= min);
        const matchesConsultation = selectedConsultations.length === 0 || selectedConsultations.some(type => doc.consultationTypes?.includes(type));
        const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(doc.rating));
        const matchesPrice = parseInt(doc.fees) <= parseInt(price);
        const isAvailable = !isChecked || doc.availability;

        return (
            matchesName &&
            matchesDept &&
            matchesSpecialty &&
            matchesGender &&
            matchesExperience &&
            matchesConsultation &&
            matchesRating &&
            matchesPrice &&
            isAvailable
        );
    });

    const sortedDoctors = [...filteredDoctors].sort((a, b) => {
        if (sortBy === "priceLow") return parseInt(a.fees) - parseInt(b.fees);
        if (sortBy === "priceHigh") return parseInt(b.fees) - parseInt(a.fees);
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
    });

    const totalPages = Math.ceil(sortedDoctors.length / doctorsPerPage);
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = sortedDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <>
            <DoctorsGridFirstSection onSearch={handleSearchFilters} />

            <div className="gridMainContainer">
                <div className="gridMainLeftSection">
                    <div className="filter-box">
                        <div className="filter-box-header">
                            <div className="filterUpperText">
                                <p>Filter</p>
                                <p onClick={handleClearAll} style={{ textDecoration: "underline", cursor: "pointer" }}>Clear All</p>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Search doctor..."
                            className="filter-search"
                            value={searchFilters.doctorName}
                            onChange={(e) => setSearchFilters(prev => ({ ...prev, doctorName: e.target.value }))}
                        />
                        <hr />

                        {/* SPECIALTIES */}
                        <div className="filter-section">
                            <div className="filter-header" onClick={() => toggleFilter('specialties')}>
                                <label>Specialties</label>
                                <span>{openFilters.specialties ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {openFilters.specialties && (
                                <div className="checkbox-group">
                                    {displayedSpecialties.map((specialty, index) => (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                checked={selectedSpecialties.includes(specialty)}
                                                onChange={() => toggleSelection(specialty, selectedSpecialties, setSelectedSpecialties)}
                                            /> {specialty}
                                        </label>
                                    ))}
                                    {!showMoreSpecialties && (
                                        <p className="view-more-btn" onClick={() => setShowMoreSpecialties(true)}>View More...</p>
                                    )}
                                </div>
                            )}
                        </div>
                        <hr />

                        {/* GENDER */}
                        <div className="filter-section">
                            <div className="filter-header" onClick={() => toggleFilter('gender')}>
                                <label>Gender</label>
                                <span>{openFilters.gender ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {openFilters.gender && (
                                <div className="checkbox-group">
                                    {["Male", "Female", "Others"].map(gender => (
                                        <label key={gender}>
                                            <input
                                                type="checkbox"
                                                checked={selectedGenders.includes(gender)}
                                                onChange={() => toggleSelection(gender, selectedGenders, setSelectedGenders)}
                                            /> {gender}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                        <hr />

                        {/* EXPERIENCE */}
                        <div className="filter-section">
                            <div className="filter-header" onClick={() => toggleFilter('experience')}>
                                <label>Experience</label>
                                <span>{openFilters.experience ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {openFilters.experience && (
                                <div className="checkbox-group">
                                    {[2, 5, 8, 10, 15, 20].map(years => (
                                        <label key={years}>
                                            <input
                                                type="checkbox"
                                                checked={selectedExperience.includes(years)}
                                                onChange={() => toggleSelection(years, selectedExperience, setSelectedExperience)}
                                            /> {years}+ years
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                        <hr />

                        {/* CONSULTATION */}
                        <div className="filter-section">
                            <div className="filter-header" onClick={() => toggleFilter('consultation')}>
                                <label>Consultation Types</label>
                                <span>{openFilters.consultation ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {openFilters.consultation && (
                                <div className="checkbox-group">
                                    {["Audio Call", "Video Call", "Instant Counselling", "Chat"].map(type => (
                                        <label key={type}>
                                            <input
                                                type="checkbox"
                                                checked={selectedConsultations.includes(type)}
                                                onChange={() => toggleSelection(type, selectedConsultations, setSelectedConsultations)}
                                            /> {type}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                        <hr />

                        {/* RATING */}
                        <div className="filter-section">
                            <div className="filter-header" onClick={() => toggleFilter('rating')}>
                                <label>Rating</label>
                                <span>{openFilters.rating ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {openFilters.rating && (
                                <div className="checkbox-group">
                                    {[5, 4, 3, 2, 1].map(rating => (
                                        <label key={rating}>
                                            <input
                                                type="checkbox"
                                                checked={selectedRatings.includes(rating)}
                                                onChange={() => toggleSelection(rating, selectedRatings, setSelectedRatings)}
                                            /> {rating} Star
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* PRICING */}
                        {/* <div className="filter-section">
                            <div className="filter-header" onClick={() => toggleFilter('pricing')}>
                                <label>Pricing (${price})</label>
                                <span>{openFilters.pricing ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {openFilters.pricing && (
                                <input
                                    type="range"
                                    min="200"
                                    max="10000"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            )}
                        </div> */}
                    </div>
                </div>

                <div className="gridMainRightSection">
                    <div className="doctors-header-bar">
                        <h3>Showing <span>{filteredDoctors.length}</span> Doctors For You</h3>

                        <div className="header-controls">
                            <label className="availability-switch">
                                Availability
                                <div className={`slider ${isChecked ? 'on' : ''}`} onClick={() => setIsChecked(!isChecked)}>
                                    {isChecked ? <FaCheck className="icon onIcon" /> : <FaTimes className="icon" />}
                                </div>
                            </label>

                            <div className="sort-dropdown">
                                <label htmlFor="sort-select">Sort By:</label>
                                <select
                                    id="sort-select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="">Default</option>
                                    <option value="priceLow">Price (Low to High)</option>
                                    <option value="priceHigh">Price (High to Low)</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {currentDoctors.map((doc, idx) => (
                        <DoctorCard key={idx} {...doc} />
                    ))}

                    {filteredDoctors.length > doctorsPerPage && (
                        <div className="pagination">
                            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>‹</button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button key={i + 1} className={currentPage === i + 1 ? 'activePage' : ''} onClick={() => handlePageChange(i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>›</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
