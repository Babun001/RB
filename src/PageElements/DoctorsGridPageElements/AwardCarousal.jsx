// AwardsCarousel.jsx
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./DoctorsGridPageCss/AwardsCarousel.css";

export default function AwardsCarousel({ awards }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="awardsCarouselWrapper">
      <h3>Awards</h3>
      <div className="carouselContainer">
        <button className="carouselNav left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="awardsTrack" ref={scrollRef}>
          {awards.map((award, index) => (
            <div key={index} className="awardCard">
              <div className="icon" />
              <h4 className="awardTitle">{award.awdName}</h4>
              <p className="awardDescription">{award.awdDetails}</p>
            </div>
          ))}
        </div>

        <button className="carouselNav right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
