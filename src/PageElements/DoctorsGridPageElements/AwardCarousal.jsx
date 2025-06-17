import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./DoctorsGridPageCss/AwardsCarousel.css";

export default function AwardsCarousel({ awards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  const handleScroll = (direction) => {
    const maxIndex = Math.max(0, awards.length - visibleCount);
    setCurrentIndex((prev) => {
      if (direction === "left") return Math.max(prev - visibleCount, 0);
      if (direction === "right") return Math.min(prev + visibleCount, maxIndex);
      return prev;
    });
  };

  const visibleAwards = awards.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="awardsCarouselWrapper">
      <h3>Awards</h3>
      <div className="carouselContainer">
        <button className="carouselNav left" onClick={() => handleScroll("left")} disabled={currentIndex === 0}>
          <FaChevronLeft />
        </button>

        <div className="awardsTrack paginated">
          {visibleAwards.map((award, index) => (
            <div key={index} className="awardCard">
              <div className="icon" />
              <h4 className="awardTitle">{award.awdName}</h4>
              <p className="awardDescription">{award.awdDetails}</p>
            </div>
          ))}
        </div>

        <button
          className="carouselNav right"
          onClick={() => handleScroll("right")}
          disabled={currentIndex + visibleCount >= awards.length}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
