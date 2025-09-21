import React, { useState, useEffect, useCallback } from 'react'

function CustomerInterface1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = [
    "src/assets/img/img1.png",
    "src/assets/img/img2.png",
    "src/assets/img/img3.png"
  ];

  const totalSlides = images.length;


  // Fixed auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [totalSlides, isPaused]);

  // Memoized functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Fixed error handling
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    console.warn(`Failed to load image ${index + 1}: ${images[index]}`);
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI5NjAiIHk9IjU2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQ4IiBmaWxsPSIjOWZhMmE3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+';
  }, [images]);

  // Fixed keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const carouselContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: '#000',
    cursor: isPaused ? 'pointer' : 'default'
  };

  const carouselWrapperStyle: React.CSSProperties = {
    display: 'flex',
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    height: '100%',
    width: `${totalSlides * 100}%`
  };

  const imageStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    flexShrink: 0,
    display: 'block',
    userSelect: 'none'
  };

  const buttonBaseStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    padding: '16px 20px',
    cursor: 'pointer',
    fontSize: '24px',
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    zIndex: 10,
    fontWeight: 'bold'
  };

  const prevButtonStyle: React.CSSProperties = {
    ...buttonBaseStyle,
    left: '30px'
  };

  const nextButtonStyle: React.CSSProperties = {
    ...buttonBaseStyle,
    right: '30px'
  };

  const indicatorsContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '12px',
    zIndex: 10
  };

  const getIndicatorStyle = (index: number): React.CSSProperties => ({
    width: index === currentSlide ? '40px' : '12px',
    height: '12px',
    borderRadius: '6px',
    border: 'none',
    background: index === currentSlide 
      ? 'rgba(255, 255, 255, 0.9)' 
      : 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });

  const pauseIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    opacity: isPaused ? 1 : 0,
    transition: 'opacity 0.3s ease',
    zIndex: 10,
    pointerEvents: 'none' as const
  };

  return (
    <div 
      className="carousel-container"
      style={carouselContainerStyle}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
    >
      {/* Pause indicator */}
      <div style={pauseIndicatorStyle}>
        ⏸ Paused
      </div>

      {/* Carousel wrapper */}
      <div 
        className="carousel-wrapper" 
        style={carouselWrapperStyle}
        role="img"
        aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
      >
        {images.map((image, index) => (
          <img
            key={`slide-${index}`}
            src={image}
            alt={`Slide ${index + 1}`}
            style={imageStyle}
            onError={(e) => handleImageError(e, index)}
            loading={index === 0 ? "eager" : "lazy"}
            draggable={false}
          />
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        style={prevButtonStyle}
        aria-label="Previous slide"
        type="button"
      >
        ❮
      </button>
      
      <button
        onClick={nextSlide}
        style={nextButtonStyle}
        aria-label="Next slide"
        type="button"
      >
        ❯
      </button>
      
      {/* Slide indicators */}
      <div style={indicatorsContainerStyle} role="tablist" aria-label="Slide navigation">
        {images.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            style={getIndicatorStyle(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentSlide}
            type="button"
          />
        ))}
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.2)',
        zIndex: 5
      }}>
        <div style={{
          height: '100%',
          width: `${((currentSlide + 1) / totalSlides) * 100}%`,
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          transition: 'width 0.8s ease',
          borderRadius: '0 2px 2px 0'
        }} />
      </div>
    </div>
  );
}

export default CustomerInterface1;