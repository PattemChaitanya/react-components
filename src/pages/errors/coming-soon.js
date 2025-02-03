import React, { useEffect, useState } from "react";
import "./styles.css";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-10T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ).padStart(2, "0"),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon-container">
      <h1 className="coming-soon-header">CSS Component library</h1>
      <h2 className="coming-soon-title">Something Exciting is Coming Soon!</h2>
      <p className="coming-soon-subtitle">
        Stay tuned for an experience that redefines modern design.
      </p>
      <div className="countdown">
        <div className="time-box">
          <span className="time">
            {timeLeft.days} days, {timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
