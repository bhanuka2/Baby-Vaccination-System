import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const HomePage: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Also listen for orientation changes
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Determine auto-play based on screen size and user preference
  const shouldAutoPlay = windowSize.width > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="homepage">
      <Carousel
        autoPlay={shouldAutoPlay}
        interval={windowSize.width <= 768 ? 6000 : 5000}
      />
    </div>
  );
};

export default HomePage;
