import React, { useRef } from "react";
import "../styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    text: "Azan is a talented web developer who delivered clean and responsive designs.",
    stars: 5,
  },
  {
    id: 2,
    name: "James R.",
    text: "He met all deadlines and went above and beyond. Great experience!",
    stars: 4,
  },
  {
    id: 3,
    name: "David K.",
    text: "Excellent communication and great attention to detail. Highly recommend!",
    stars: 5,
  },
  {
    id: 4,
    name: "Anna M.",
    text: "Fantastic results! My website looks better than ever!",
    stars: 5,
  },
  {
    id: 5,
    name: "Oliver W.",
    text: "Delivered quality work on time, great experience overall.",
    stars: 4,
  },
  {
    id: 6,
    name: "Emily T.",
    text: "Very professional and efficient. I'm extremely satisfied with the final product.",
    stars: 5,
  },
  {
    id: 7,
    name: "Michael B.",
    text: "Creative solutions and fast implementation. Will hire again!",
    stars: 4,
  },
  {
    id: 8,
    name: "Rachel G.",
    text: "Great communication and attention to detail. Highly recommended.",
    stars: 5,
  },
  {
    id: 9,
    name: "Daniel P.",
    text: "Azan transformed our vision into a working platform. Truly appreciated!",
    stars: 5,
  },
  {
    id: 10,
    name: "Sophia H.",
    text: "The site runs smoothly and looks stunning. Great job!",
    stars: 5,
  },
];

const Testimonials = () => {
  const testimonialListRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault(); // Prevent the default vertical scroll
    // Scroll horizontally based on the mouse wheel direction
    testimonialListRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div className="testimonials">
      <h4 className="section-title">What People Say</h4>
      <div
        className="testimonial-list"
        ref={testimonialListRef}
        onWheel={handleWheel} // Listen for wheel scroll events
      >
        {testimonials.map(({ id, name, text, stars }) => (
          <div key={id} className="testimonial-square-card">
            <div className="testimonial-text-block">
              <p className="testimonial-text">"{text}"</p>
              <p className="testimonial-name">– {name}</p>
              <div className="testimonial-stars">
                <span>{"⭐".repeat(stars)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
