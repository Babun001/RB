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

    const categories = ['General Wellness', 'Lifestyle', 'Male Care', 'Female Care', 'Cardiology', 'Dialysis', 'Gynaecology', 'Diabetes'];

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
                return [
                    {
                        title: 'KFT',
                        TestsAndComp: ['7 Tests', '7 Components'],
                        price: 1300,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Iron Profile',
                        TestsAndComp: ['2 Tests', '5 Components'],
                        price: 1400,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Coagulation Profile',
                        TestsAndComp: ['4 Tests', '39 Components'],
                        price: 1400,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'RPI',
                        TestsAndComp: ['4 Tests', '11 Components'],
                        price: 700,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Elec/Renal',
                        TestsAndComp: ['6 Tests', '9 Components'],
                        price: 1700,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'RPII',
                        TestsAndComp: ['5 Tests', '38 Components'],
                        price: 1100,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                ];
            case 'Male Care':
                return [
                    {
                        title: 'RBD Healthy Life, Blood (Male)',
                        TestsAndComp: ['15 Tests', '98 Components'],
                        price: 4000,
                        fasting: 'Yes',
                        gender: 'Male',
                        ageRange: '18-35'
                    },
                    {
                        title: 'RBD Healthy Life (Male)',
                        TestsAndComp: ['21 Tests', '104 Components'],
                        price: 6900,
                        fasting: 'Yes',
                        gender: 'Male',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Health Check Up (Male)',
                        TestsAndComp: ['19 Tests', '90 Components'],
                        price: 6000,
                        fasting: 'Yes',
                        gender: 'Male',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Prostate Screening Test',
                        TestsAndComp: ['3 Tests', '3 Components'],
                        price: 2200,
                        fasting: 'Yes',
                        gender: 'Male',
                        ageRange: '18-35'
                    },
                ];
            case 'Female Care':
                return [
                    {
                        title: 'RBD Healthy Life, Blood (Female)',
                        TestsAndComp: ['15 Tests', '98 Components'],
                        price: 4000,
                        fasting: 'Yes',
                        gender: 'Female',
                        ageRange: '18-35'
                    },
                    {
                        title: 'RBD Healthy Life (Female)',
                        TestsAndComp: ['21 Tests', '104 Components'],
                        price: 6900,
                        fasting: 'Yes',
                        gender: 'Female',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Health Check Up (Female)',
                        TestsAndComp: ['19 Tests', '90 Components'],
                        price: 6000,
                        fasting: 'Yes',
                        gender: 'Female',
                        ageRange: '18-35'
                    },
                    {
                        title: 'PCOS/PCOD Profile',
                        TestsAndComp: ['6 Tests', '6 Components'],
                        price: 2200,
                        fasting: 'Yes',
                        gender: 'Female',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Pregnancy Profile',
                        TestsAndComp: ['11 Tests', '64 Components'],
                        price: 3700,
                        fasting: 'Yes',
                        gender: 'Female',
                        ageRange: '18-35'
                    },
                ];
            case 'Cardiology':
                return [
                    {
                        title: 'Cardiac Enzyme Profile',
                        TestsAndComp: ['0 Tests', '4 Components'],
                        price: 1250,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Pre Cath Profile 1',
                        TestsAndComp: ['8 Tests', '38 Components'],
                        price: 2500,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Cardiac Health Check Up >45 Yrs',
                        TestsAndComp: ['18 Tests', '79 Components'],
                        price: 5500,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Pre Cardiac-angio Checkup',
                        TestsAndComp: ['17 Tests', '97 Components'],
                        price: 5000,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Cardiac Injury Profile',
                        TestsAndComp: ['7 Tests', '40 Components'],
                        price: 2200,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Cardiac Health Check Up (Blood)',
                        TestsAndComp: ['15 Tests', '86 Components'],
                        price: 4000,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Cardiac Health Check Up <45 Yrs',
                        TestsAndComp: ['17 Tests', '77 Components'],
                        price: 5200,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                ];
            case 'Dialysis':
                return [
                    {
                        title: 'Dialysis Special Offer (Multiuse)',
                        TestsAndComp: ['0 Tests', '2 Components'],
                        price: 1800,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Dialysis Special Offer (Singleuse)',
                        TestsAndComp: ['0 Tests', '2 Components'],
                        price: 2200,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                ];
            case 'Gynaecology':
                return [
                    {
                        title: 'FSH, LH, PRL',
                        TestsAndComp: ['3 Tests', '3 Components'],
                        price: 1600,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'LH & FSH',
                        TestsAndComp: ['2 Tests', '2 Components'],
                        price: 1000,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Antenatal Profile',
                        TestsAndComp: ['8 Tests', '61 Components'],
                        price: 1900,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Pre-Marriage Profile',
                        TestsAndComp: ['5 Tests', '15 Components'],
                        price: 1500,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'BOH (Bad Obstetric History) Panel',
                        TestsAndComp: ['8 Tests', '32 Components'],
                        price: 9000,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                    {
                        title: 'Infertility Profile',
                        TestsAndComp: ['13 Tests', '31 Components'],
                        price: 5800,
                        fasting: 'Yes',
                        gender: 'Any',
                        ageRange: '18-35'
                    },
                ];
            case 'Diabetes': return [
                {
                    title: 'Diabetic Profile',
                    TestsAndComp: ['8 Tests', '70 Components'],
                    price: 2100,
                    fasting: 'Yes',
                    gender: 'Any',
                    ageRange: '18-35'
                },
            ];
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
