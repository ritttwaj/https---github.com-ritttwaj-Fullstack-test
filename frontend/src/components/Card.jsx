import React, { useState } from 'react';
import Confetti from 'react-confetti'; 
import styles from './Card.module.css';

function Card() {
  const [count, setCount] = useState(0); 
  const [score, setScore] = useState(0); 
  const [prize, setPrize] = useState(null); 
  const [showConfetti, setShowConfetti] = useState(false); 

  // Function to handle the button click
  const handleClick = async () => {
    setCount((prevCount) => prevCount + 1);

    try {
      const response = await fetch('http://localhost:3000/api/click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      setScore((prevScore) => prevScore + data.points);

      if (data.prize) {
        setPrize(data.prize);
        if (data.prize === 'Generic Prize') {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000); 
        }
      } else {
        setPrize(null);
      }
    } catch (error) {
      console.error('Error while calling the backend:', error);
    }
  };

  // Reset button functionality
  const handleReset = () => {
    setCount(0);
    setScore(0);
    setPrize(null);
    setShowConfetti(false);
  };

  return (
    <div className={styles.cards}>
      <h1>Click Game</h1>
      {showConfetti && <Confetti />} 
      <div>
        <strong>Total Score:</strong> {score}
      </div>
      <div>
        <strong>Click Counter:</strong> {count}
      </div>
      {prize && (
        <div>
          <strong>Prize:</strong> {prize}
        </div>
      )}
     <div style={{ marginTop: '20px' }}> 
        <button onClick={handleClick} style={{ marginRight: '10px' }}>
          Click Me!
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Card;
