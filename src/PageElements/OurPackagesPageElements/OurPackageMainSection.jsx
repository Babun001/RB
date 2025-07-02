import { FaShoppingCart } from 'react-icons/fa';
import cornerIcon from '../../Assets/cornerIcon.png';
import { useState } from 'react';
import './OurPackagesPageCss/OurPackageMainSection.css';
import { IoSearchOutline } from "react-icons/io5";
import AnimatedText from '../../AnimatedText';

import png1 from '../../Assets/Medical doctor_ 1.png'

export default function OurPackageMainSection() {
    const [activeTab, setActiveTab] = useState('General Wellness');
    const [filters, setFilters] = useState({ fasting: '', gender: '', ageRange: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;

    const categories = ['General Wellness', 'Lifestyle', 'Male Care', 'Women Care', 'Cardiology', 'dialysis', 'Gynaecology', 'Diabetes'];

    const getCardsForCategory = (category) => {
        switch (category) {
            case 'General Wellness':
                return [{
                    title: 'Serology Profile',
                    TestsAndComp: ['4 Tests', '7 Components'],
                    price: 1600,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '18-35'
                },
                {
                    title: 'Master Health Check up',
                    TestsAndComp: ['15 Tests', '88 Components'],
                    price: 3500,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '18-35'
                },
                {
                    title: 'Executive Health Check Up',
                    TestsAndComp: ['17 Tests', '95 Components'],
                    price: 5000,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '18-35'
                },
                {
                    title: 'Master Health Check up, Blood',
                    TestsAndComp: ['12 Tests', '75 Components'],
                    price: 1900,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '18-35'
                },

                {
                    title: 'Full Body Platinum Package (Blood)',
                    TestsAndComp: ['15 Tests', '87 Components'],
                    price: 4000,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '18-35'
                },
                {
                    title: 'Full Body Platinum Package (Male)',
                    TestsAndComp: ['21 Tests', '93 Components'],
                    price: 6900,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '18-35'
                },


                ];
            case 'Lifestyle':
                return Array(10).fill({
                    title: 'Diabetes Check',
                    TestsAndComp: ['5 Tests', '6 Components'],
                    price: 2000,
                    fasting: 'No',
                    gender: 'Any',
                    ageRange: '36-50'
                });
            case 'Gynecology Packages':
                return Array(14).fill({
                    title: 'PCOD Package',
                    TestsAndComp: ['9 Tests', '22 Components'],
                    price: 4500,
                    fasting: 'No',
                    gender: 'Female',
                    ageRange: '18-35'
                });
            case 'Offers':
                return Array(16).fill({
                    title: 'Summer Special Package',
                    TestsAndComp: ['15 Tests', '50 Components'],
                    price: 2500,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '51+'
                });
            default:
                return [];
        }
    };

    const applyFilters = (cards) => {
        return cards.filter(card => {
            const { fasting, gender, ageRange } = filters;
            return (
                (fasting ? card.fasting === fasting : true) &&
                (gender ? card.gender === gender : true) &&
                (ageRange ? card.ageRange === ageRange : true)
            );
        });
    };

    const handleResetFilters = () => {
        setFilters({ fasting: '', gender: '', ageRange: '' });
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const allCards = applyFilters(getCardsForCategory(activeTab));
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(allCards.length / cardsPerPage);

    return (
        <div className="ourPackageContainer">
            <div className="ourPackageUpperSection">
                <AnimatedText tag="h2" type="chars" y={30} className="rb-title">
                    Our Packages
                </AnimatedText>

                <AnimatedText tag="p" type="words" y={-20} className="paraText">
                    RB Diagnostic offers a comprehensive range of health check-up packages tailored for every stage of life.
                </AnimatedText>
                <AnimatedText tag="p" type="words" y={-20} className="paraText">
                    Each package is designed by experts to provide accurate insights and support preventive healthcare, ensuring timely diagnosis and better health outcomes.
                </AnimatedText>

                {/* <p className="paraText">RB Diagnostic offers a comprehensive range of health check-up packages tailored for every stage of life.</p>
                <p className="paraText">Each package is designed by experts to provide accurate insights and support preventive healthcare, ensuring timely diagnosis and better health outcomes.</p> */}
            </div>

            <div className="midNavButtons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`navBtn ${activeTab === category ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab(category);
                            setCurrentPage(1);
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="packageBodySection">

                <div className="packageBodyLeftSection">
                    {/* FILTERS */}
                    <div className="filterSection">
                        <div className="filterHeader">
                            <p style={{ margin: 0, fontSize: "16px" }}>Filter By</p>
                            <IoSearchOutline size={20} style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                backgroundColor: "#01CAB8",
                                borderRadius: "50%",
                                padding: "5px"

                            }} />
                        </div>

                        <hr />
                        <label>
                            {/* Fasting: */}
                            <select value={filters.fasting} onChange={(e) => setFilters({ ...filters, fasting: e.target.value })}>
                                <option value="">Fasting</option>
                                <option value="">All</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label>
                            {/* Gender: */}
                            <select value={filters.gender} onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
                                <option value="">Gender</option>
                                <option value="">All</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Any">Any</option>
                            </select>
                        </label>

                        <label>
                            {/* Age Range: */}
                            <select value={filters.ageRange} onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}>
                                <option value="">Age Range</option>
                                <option value="">All</option>
                                <option value="18-35">18-35</option>
                                <option value="36-50">36-50</option>
                                <option value="51+">51+</option>
                            </select>
                        </label>

                        <button className="resetBtn" onClick={handleResetFilters}>Reset</button>
                    </div>

                    <div className="mainLeftDoctorImage">
                        <img src={png1} alt="Doctor png" />
                    </div>
                </div>


                {/* CARDS */}
                <div className="mainPackageCardSection">
                    {currentCards.map((card, index) => (
                        <div key={index} className="packageCard mainPackageCard">
                            <div className="cornerImage">
                                <div className="upperCardText">
                                    <p style={{ backgroundColor: "#D8D5F4", padding: "3px 20px", borderRadius: "20px" }}>Safe</p>
                                </div>
                                <img src={cornerIcon} alt="corner icon" style={{ width: "4.5rem" }} />
                            </div>

                            <div className="cardTitlePack mainpackageTitlePack">
                                <h2 style={{ margin: "5px 0px" }}>
                                    {card.title.length > 25 ? `${card.title.slice(0, 25)}...` : card.title}
                                </h2>
                            </div>

                            <span className="testAndComp">
                                <p>Covers {card.TestsAndComp.join(' ')}</p>
                            </span>

                            {/* <span className="testAndCompSpan">
                                <p>Covers {card.TestsAndComp.join(' ')}</p>
                            </span> */}

                            <div className="cardsMiddleSec">
                                <h4 style={{ fontSize: "1.2rem", fontWeight: "500" }}>Report Delivery</h4>
                                <p style={{ color: "gray" }}>Speak to our customer care</p>
                            </div>

                            {/* <div className="cardsMiddleSec">
                                <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "red" }}>Report Delivery</h4>
                                <p style={{ color: "gray" }}>Speak to our customer care</p>
                            </div> */}

                            <div className="priceSection">
                                <h2 style={{ fontSize: "2rem", color: "black" }}>₹{card.price.toFixed(2)}</h2>
                            </div>

                            <div className="cardLowerSec">
                                <button title='Click to View Details'>View Details </button>
                                <div className="cardLowerRigntSec">
                                    <FaShoppingCart className='addticartBtn' title="Add to Cart" style={{ color: "#8A8A8A", fontSize: "2rem", cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* PAGINATION */}
                    {totalPages > 1 && (
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
        </div>
    );
}
