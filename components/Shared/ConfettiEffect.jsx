"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiEffect = ({ run }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return run ? (
    <Confetti width={windowSize.width} height={windowSize.height} />
  ) : null;
};

export default ConfettiEffect;
