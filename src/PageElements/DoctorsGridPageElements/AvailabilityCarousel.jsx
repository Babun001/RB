import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./DoctorsGridPageCss/AvailabilityCarousel.css";

const generateRandomTimes = (count) => {
  const slots = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const date = new Date();
    date.setDate(now.getDate() + i);

    const startHour = 9 + Math.floor(Math.random() * 8);
    const endHour = startHour + 1;

    slots.push({
      date: date.toDateString(),
      timeRange: `${String(startHour).padStart(2, '0')}:00 - ${String(endHour).padStart(2, '0')}:00`,
    });
  }
  return slots;
};

export default function AvailabilityCarousel() {
  const [slots, setSlots] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    const generated = generateRandomTimes(20);
    setSlots(generated);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(slots.length - visibleCount, prev + visibleCount));
  };

  const visibleSlots = slots.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="availabilityWrapper">
      <h3>Availability</h3>
      <div className="carouselContainer">
        <button className="carouselNav left" onClick={handlePrev} disabled={startIndex === 0}>
          <FaChevronLeft />
        </button>

        <div className="availabilityTrack paginated">
          {visibleSlots.map((slot, idx) => {
            const dateParts = slot.date.split(" ");
            return (
              <div className="availabilityCard" key={idx}>
                <p className="date">{`${dateParts[0]} ${dateParts[1]} ${dateParts[3]}`}</p>
                <p className="time">{slot.timeRange}</p>
                <p className="pm">PM</p>
              </div>
            );
          })}
        </div>

        <button
          className="carouselNav right"
          onClick={handleNext}
          disabled={startIndex + visibleCount >= slots.length}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
