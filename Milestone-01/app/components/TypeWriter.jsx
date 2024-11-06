"use client";

import { useEffect, useState } from 'react';

const Typewriter = ({ lines, speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (index < lines[lineIndex].length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + lines[lineIndex].charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
        setLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
      }, delay);

      return () => clearTimeout(resetTimer);
    }
  }, [index, lines, lineIndex, speed, delay]);

  return <h1 className="text-5xl font-bold">{displayedText}</h1>;
};

export default Typewriter;
