import React, { useState, useEffect } from "react";

const Carousel = ({ delay, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!children || children.length < 2) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % children.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [currentIndex, delay, children]);

  if (!children || children.length === 0) return null;

  const currentChild = children[currentIndex];
  return (
    <div className="carousel">
      <div className="current">{currentChild}</div>
      {children.length > 2 && (
        <div className="buttons">
          <button
            className="button-previous"
            onClick={() =>
              setCurrentIndex(
                (currentIndex + children.length - 1) % children.length
              )
            }
          >
            Previous
          </button>
          <button
            className="button-next"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % children.length)
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
