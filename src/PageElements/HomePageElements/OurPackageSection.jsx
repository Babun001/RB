import { useState } from 'react';
import './HomePageCss/OurPackageSection.css'

export default function OurPackage() {
  const [activeTab, setActiveTab] = useState('General Wellness');

  const categories = ['General Wellness', 'Lifestyle', 'Gynecology Packages', 'Offers'];

  const getCardsForCategory = (category) => {
    return [
      { title: `${category} - Card 1`, description: 'This is a sample card.' },
      { title: `${category} - Card 2`, description: 'This is a sample card.' },
      { title: `${category} - Card 3`, description: 'This is a sample card.' },
    ];
  };

  const cards = getCardsForCategory(activeTab);

  return (
    <>
      <div className="ourPackageContainer">
        <div className="ourPackageUpperSection">
          <h2 className='rb-title'>Our Packages</h2>
          <p className='paraText'>RB Diagnostic offers a comprehensive range of health check-up packages tailored for every stage of life.</p>
          <p className='paraText'>Each package is designed by experts to provide accurate insights and support preventive healthcare, ensuring timely diagnosis and better health outcomes.</p>
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
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
