/* rainAnimation.jsx 원본 코드 그대로 */
import React, { useEffect, useState } from 'react';
import './RainAnimation.css';

const RainAnimation = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const createBox = () => {
      const newBox = {
        id: Math.random(),
        left: Math.random() * 100 + 'vw',
        animationDuration: Math.random() * 2 + 3 + 's',
        animationDelay: Math.random() * 2 + 's',
      };
      setBoxes((prevBoxes) => [...prevBoxes, newBox]);

      setTimeout(() => {
        setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== newBox.id));
      }, parseFloat(newBox.animationDuration) * 1000 + parseFloat(newBox.animationDelay) * 1000);
    };

    const interval = setInterval(createBox, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rain-container">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="rain-box"
          style={{
            left: box.left,
            animationDuration: box.animationDuration,
            animationDelay: box.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RainAnimation;