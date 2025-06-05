import { useState } from 'react';
import './HomePageCss/OurPackageSection.css';
import { FaShoppingCart } from "react-icons/fa";
import cornerIcon from '../../Assets/cornerIcon.png';

export default function OurPackage() {
  const [activeTab, setActiveTab] = useState('General Wellness');

  const categories = ['General Wellness', 'Lifestyle', 'Gynecology Packages', 'Offers'];

  const getCardsForCategory = (category) => {
    // You can customize data per category here
    return [
      {
        title: 'Serology Profile',
        TestsAndComp: ['4 Tests', '7 Components'],
        price: 1600.00
      },
      {
        title: 'KFT',
        TestsAndComp: ['7 Tests', '7 Components'],
        price: 1300.00
      },
      {
        title: 'RBD Healthy Life, Blood (Female)',
        TestsAndComp: ['21 Tests', '93 Components'],
        price: 6500.00
      },{
        title: 'KFT',
        TestsAndComp: ['7 Tests', '7 Components'],
        price: 1300.00
      },
    ];
  };

  const cards = getCardsForCategory(activeTab);

  return (
    <div className="ourPackageContainer">
      <div className="ourPackageUpperSection">
        <h2 className="rb-title">Our Packages</h2>
        <p className="paraText">
          RB Diagnostic offers a comprehensive range of health check-up packages tailored for every stage of life.
        </p>
        <p className="paraText">
          Each package is designed by experts to provide accurate insights and support preventive healthcare, ensuring timely diagnosis and better health outcomes.
        </p>
      </div>

      <div className="midNavButtons">
        {categories.map((category) => (
          <button
            key={category}
            className={`navBtn ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="ourPackageCardSection">
        {cards.map((card, index) => (
          <div key={index} className="packageCard">

            <div className="cornerImage">
              <div className="upperCardText">
                <p style={{
                  backgroundColor: "#D8D5F4",
                  padding: "3px 20px",
                  borderRadius: "20px",
                  // fontSize: "1.5rem",
                  // textAlign: "center",
                  // fontWeight: "700"
                }}>Safe</p>
              </div>
              <img src={cornerIcon} alt="corner icon" style={{ width: "4.5rem" }} />
            </div>




            <div className="cardTitlePack">
              <h2 style={{ lineHeight: "25px", margin: "5px 0px" }}>{card.title}</h2>
            </div>

            <span className="testAndComp">
              <p>Covers {card.TestsAndComp.join(' ')}</p>
            </span>

            <div className="cardsMiddleSec">
              <h4 style={{ fontSize: "1.2rem" , fontWeight:"500"}}>Report Delivery</h4>
              <p style={{ color: "gray" }}>Speak to our customer care</p>
            </div>

            <div className="priceSection">
              <h2 style={{ fontSize: "2rem", color: "black" }}>₹{card.price.toFixed(2)}</h2>
            </div>

            <div className="cardLowerSec">
              <button title='Click to View Details'>View Details </button>
              <div className="cardLowerRigntSec">
                <FaShoppingCart className='addticartBtn' title="Add to Cart" style={{ color: "#8A8A8A", fontSize: "2rem", cursor: "pointer" }} />
                {/* <FaBookmark title="Bookmark" style={{ color: "#8A8A8A", fontSize: "2rem", cursor: "pointer", marginLeft: "5px" }} /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
