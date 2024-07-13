"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-31T18:30:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        gün: Math.floor(difference / (1000 * 60 * 60 * 24)),
        saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        dakika: Math.floor((difference / 1000 / 60) % 60),
        saniye: Math.floor((difference / 1000) % 60),
      };
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

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="font-great-vibes">
        {timeLeft[interval]} {interval} &nbsp;
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
    </div>
  );
};

export default CountdownTimer;
