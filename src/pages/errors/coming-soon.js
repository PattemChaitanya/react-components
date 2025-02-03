import React, { useEffect, useState } from "react";
import "./styles.css";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-02-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = `${String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0")} days, 
 ${String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0")} :
 ${String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0")} :
 ${String(Math.floor((difference / 1000) % 60)).padStart(2, "0")}`;
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="coming-soon-container">
      <h1 className="coming-soon-header">CSS Component library</h1>
      <h2 className="coming-soon-title">Something Exciting is Coming Soon!</h2>
      <p className="coming-soon-description">
        We're working hard to bring you an amazing experience. Stay tuned!
      </p>
      <div className="countdown">
        <div className="time-box">
          <span className="time-value">{timeLeft}</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
