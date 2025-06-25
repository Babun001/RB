import { useState } from 'react';
import './HomePageCss/OurPackageSection.css';
import { FaShoppingCart } from "react-icons/fa";
import cornerIcon from '../../Assets/cornerIcon.png';

export default function OurPackage() {
  const [activeTab, setActiveTab] = useState('General Wellness');

  const categories = ['General Wellness', 'Lifestyle', 'Gynecology Packages', 'Offers'];

  const getCardsForCategory = (category) => {
    const data = {
      'General Wellness': [
        {
          title: 'Serology Profile',
          TestsAndComp: ['4 Tests', '7 Components'],
          price: 1600.00
        },
        {
          title: 'KFT (Kidney Function Test)',
          TestsAndComp: ['7 Tests', '7 Components'],
          price: 1300.00
        },
        {
          title: 'RBD Healthy Life, Blood (Female)',
          TestsAndComp: ['21 Tests', '93 Components'],
          price: 6500.00
        }, {
          title: 'KFT (Kidney Function Test)',
          TestsAndComp: ['7 Tests', '7 Components'],
          price: 1300.00
        },
      ],

      'Lifestyle': [
        {
          title: 'Fitness Pro Package',
          TestsAndComp: ['25 Tests', '68 Components'],
          price: 2799.00
        },
        {
          title: 'Smoker’s Risk Assessment',
          TestsAndComp: ['10 Tests', '25 Components'],
          price: 1899.00
        },
        {
          title: 'Stress & Sleep Health Panel',
          TestsAndComp: ['6 Tests', '18 Components'],
          price: 1299.00
        },
        {
          title: 'Nutritional Health Screening',
          TestsAndComp: ['14 Tests', '30 Components'],
          price: 1699.00
        }
      ],

      'Gynecology Packages': [
        {
          title: 'Women’s Hormonal Profile',
          TestsAndComp: ['9 Tests', '21 Components'],
          price: 2299.00
        },
        {
          title: 'PCOD/PCOS Screening',
          TestsAndComp: ['7 Tests', '17 Components'],
          price: 1999.00
        },
        {
          title: 'Pregnancy Wellness Package',
          TestsAndComp: ['12 Tests', '30 Components'],
          price: 2599.00
        },
        {
          title: 'Anaemia Panel (Female)',
          TestsAndComp: ['5 Tests', '14 Components'],
          price: 899.00
        }
      ],

      'Offers': [
        {
          title: 'RBD Smart Combo - 1',
          TestsAndComp: ['30 Tests', '88 Components'],
          price: 1799.00
        },
        {
          title: 'Weekend Special - Wellness Check',
          TestsAndComp: ['22 Tests', '56 Components'],
          price: 1199.00
        },
        {
          title: 'Buy 1 Get 1 Free - Basic Panel',
          TestsAndComp: ['15 Tests', '40 Components'],
          price: 999.00
        },
        {
          title: 'Festive Health Pack',
          TestsAndComp: ['28 Tests', '75 Components'],
          price: 1499.00
        }
      ]
    };

    return data[category] || [];
  };

  const cards = getCardsForCategory(activeTab);

  return (
    <div className="ourPackageContainer">
      <div className="ourPackageUpperSection">
        <h2 className="rb-title ourpackageTitle">Our Packages</h2>
        <div className="textParaSection">
          <p className="paraText">
            RB Diagnostic offers a comprehensive range of health check-up packages tailored for every stage of life.
          </p>
          <p className="paraText">
            Each package is designed by experts to provide accurate insights and support preventive healthcare, ensuring timely diagnosis and better health outcomes.
          </p>
        </div>

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
              <h2 style={{ lineHeight: "1.3", margin: "5px 0px" }}>{card.title}</h2>
            </div>

            <span className="testAndComp">
              <p>Covers {card.TestsAndComp.join(' ')}</p>
            </span>

            <div className="cardsMiddleSec">
              <h4 style={{ fontSize: "1.2rem", fontWeight: "500" }}>Report Delivery</h4>
              <p style={{ color: "gray" }}>Speak to our customer care</p>
            </div>

            <div className="priceSection">
              <h2 style={{ fontSize: "2rem", color: "black" }}>₹ {card.price.toFixed(2)}</h2>
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
