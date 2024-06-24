"use client";

import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

const Reveal = ({ khodam }: { khodam: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const colors = [
    "text-sky-500",
    "text-rose-500",
    "text-amber-500",
    "text-emerald-500",
    "text-violet-500",
    "text-cyan-500",
    "text-fuchsia-500",
    "text-rose-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  if (!isVisible) {
    return (
      <p className="animate-pulse rounded bg-accent p-1 text-2xl font-bold text-transparent md:p-3 md:text-4xl">
        {khodam}
      </p>
    );
  } else if (isVisible) {
    handleConfetti();
  }

  return (
    <p
      className={`flex items-center gap-x-2 p-1 text-2xl font-bold md:p-3 md:text-4xl ${
        randomColor
      }`}
    >
      <span className="text-sm">✨</span> {khodam}{" "}
      <span className="text-sm">✨</span>
    </p>
  );
};

export default Reveal;
