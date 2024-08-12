//https://takeuforward.org/plus ----(REDIRECTED URL Link)

// src/Banner.js
import React, { useState, useEffect } from 'react';

const Banner = ({ message, duration, link }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={styles.banner} onClick={() => window.location.href = link}>
      <p style={styles.message}>{message}</p>
      {timeLeft > 0 && <p style={styles.timer}>Time Left: {formatTime(timeLeft)}</p>}
    </div>
  );
};

const styles = {
  banner: {
    // backgroundColor: '#f43f5e',
    backgroundColor: '#E11D48',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    marginTop: '10px',
  },
  message: {
    margin: 0,
    fontSize: '18px',
    color: '#fff',
  },
  timer: {
    margin: 0,
    fontSize: '16px',
    color: '#fff',
    position: 'absolute',
    right: '10px',
    top: '10px',
  },
};

export default Banner;
