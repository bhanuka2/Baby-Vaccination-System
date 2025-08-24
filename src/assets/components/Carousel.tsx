import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const totalSlides = 3;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance to trigger slide change
  const minSwipeDistance = 50;

  const startAutoPlay = useCallback(() => {
    if (!autoPlay) return;
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);
  }, [autoPlay, interval]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Pause auto-play temporarily when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 3000);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    stopAutoPlay();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    } else {
      // Resume auto-play if swipe was too small
      setTimeout(() => setIsAutoPlaying(autoPlay), 1000);
    }
  };

  // Mouse/pointer handlers for desktop
  const onMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      stopAutoPlay();
    }
  };

  const onMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsAutoPlaying(autoPlay);
    }
  };

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Force re-render on window resize to adjust layout
      setCurrentSlide(prev => prev);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
    >
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {/* Slide 1 - WE ARE EXPERTS */}
        <div className="carousel-slide">
          <div className="slide-background-blue"></div>
          
          {/* Decorative Elements */}
          <div className="decorative-element red-rect"></div>
          <div className="decorative-element yellow-circle"></div>
          <div className="decorative-element gray-rect-small"></div>
          <div className="decorative-element teal-rect"></div>
          <div className="decorative-element blue-rect-small"></div>
          <div className="decorative-element red-rect-tiny"></div>

          {/* Decorative Lines */}
          <svg className="decorative-line purple-line" viewBox="0 0 73 118" fill="none">
            <path d="M8.25518 118L8.25505 61.5001L64.7553 61.5001L64.7553 2.32694e-05" stroke="#D67FF3" strokeWidth="15"/>
          </svg>
          <svg className="decorative-line brown-line" viewBox="0 0 65 118" fill="none">
            <path d="M4.25518 118L4.25505 61.5001L60.7553 61.5001L60.7553 2.32694e-05" stroke="#D0B9B9" strokeWidth="7"/>
          </svg>
          <svg className="decorative-line gray-curved" viewBox="0 0 84 129" fill="none">
            <path d="M70.5729 0.999946L72.6901 62.8072L11.1226 60.6901L13.4271 127.967" stroke="#C5B5B5" strokeWidth="20"/>
          </svg>

          {/* Decorative Ellipses */}
          <div className="ellipse-group">
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
          </div>

          <div className="slide-content">
            <div className="website-url">www.BabyCare.com</div>
            <h1 className="slide-title-large">WE ARE EXPERTS</h1>
            <h2 className="slide-title-large slide-title-dark">IN CHILD CARE</h2>
            <p className="slide-description">
              The Baby Care App is a smart and reliable tool designed to support parents in managing their baby's daily needs. It helps track feeding, sleep, vaccinations, and growth milestones with ease. With timely reminders and simple features, the app makes parenting more organized and stress-free.
            </p>
          </div>

          <div className="slide-image-container">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c14c753eeaa9e07d7cb81b4a8b98845ce1b324b9?width=1476" 
              alt="Baby care expert" 
              className="slide-image slide-image-rounded"
            />
          </div>

          <div className="blue-accent-bar"></div>
        </div>

        {/* Slide 2 - Make sure your children */}
        <div className="carousel-slide">
          <div className="slide-background-blue"></div>
          
          {/* Decorative Elements */}
          <div className="decorative-element red-rect-alt"></div>
          <div className="decorative-element pink-circle"></div>
          <div className="decorative-element gray-rect-small-alt"></div>
          <div className="decorative-element blue-rect-medium"></div>
          <div className="decorative-element blue-rect-small-alt"></div>
          <div className="decorative-element green-rect-tiny"></div>

          {/* Decorative Lines */}
          <svg className="decorative-line purple-line-alt" viewBox="0 0 73 118" fill="none">
            <path d="M8.25518 118L8.25505 61.5001L64.7553 61.5001L64.7553 -7.24817e-06" stroke="#D67FF3" strokeWidth="15"/>
          </svg>
          <svg className="decorative-line brown-line-alt" viewBox="0 0 65 118" fill="none">
            <path d="M4.25518 118L4.25505 61.5001L60.7553 61.5001L60.7553 -7.24817e-06" stroke="#D0B9B9" strokeWidth="7"/>
          </svg>
          <svg className="decorative-line gray-curved-alt" viewBox="0 0 70 129" fill="none">
            <path d="M63.5729 1.00001L65.6901 62.8073L4.1226 60.6902L6.42715 127.967" stroke="#C5B5B5" strokeWidth="7"/>
          </svg>

          {/* Decorative Ellipses */}
          <div className="ellipse-group ellipse-group-alt">
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
          </div>

          <div className="slide-content">
            <div className="website-url">www.BabyCare.com</div>
            <h1 className="slide-title-large">Make sure your</h1>
            <h2 className="slide-title-large slide-title-dark">children are well</h2>
            <p className="slide-description">
              The Baby Care App is a smart and reliable tool designed to support parents in managing their baby's daily needs. It helps track feeding, sleep, vaccinations, and growth milestones with ease. With timely reminders and simple features, the app makes parenting more organized and stress-free.
            </p>
          </div>

          <div className="slide-image-container slide-image-right">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/973b43596dba727e9d5119d85b2fd80710ec74a9?width=1364" 
              alt="Baby being cared for" 
              className="slide-image"
            />
          </div>
        </div>

        {/* Slide 3 - They will be under Good Care */}
        <div className="carousel-slide">
          <div className="slide-background-blue slide-background-right"></div>
          
          {/* Decorative Elements */}
          <div className="decorative-element gray-rect-right"></div>
          <div className="decorative-element yellow-circle-left"></div>
          <div className="decorative-element gray-rect-small-right"></div>
          <div className="decorative-element purple-rect"></div>
          <div className="decorative-element blue-rect-small-left"></div>
          <div className="decorative-element yellow-rect-tiny"></div>

          {/* Decorative Lines */}
          <svg className="decorative-line purple-line-right" viewBox="0 0 73 118" fill="none">
            <path d="M8.25518 118L8.25505 61.5001L64.7553 61.5001L64.7553 2.32694e-05" stroke="#D67FF3" strokeWidth="15"/>
          </svg>
          <svg className="decorative-line brown-line-right" viewBox="0 0 65 118" fill="none">
            <path d="M4.25518 118L4.25505 61.5001L60.7553 61.5001L60.7553 2.32694e-05" stroke="#D0B9B9" strokeWidth="7"/>
          </svg>
          <svg className="decorative-line gray-curved-right" viewBox="0 0 70 129" fill="none">
            <path d="M63.5729 1.00001L65.6901 62.8073L4.1226 60.6902L6.42715 127.967" stroke="#C5B5B5" strokeWidth="7"/>
          </svg>

          {/* Decorative Ellipses */}
          <div className="ellipse-group ellipse-group-right">
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
            <svg className="ellipse-item" viewBox="0 0 17 13" fill="none">
              <ellipse cx="8.5" cy="6.5" rx="8.5" ry="6.5" fill="#D9D9D9"/>
            </svg>
          </div>

          <div className="slide-content slide-content-right">
            <div className="website-url">www.BabyCare.com</div>
            <h1 className="slide-title-large">They will be under</h1>
            <h2 className="slide-title-large slide-title-darker">Good Care</h2>
            <p className="slide-description">
              The Baby Care App is a smart and reliable tool designed to support parents in managing their baby's daily needs. It helps track feeding, sleep, vaccinations, and growth milestones with ease. With timely reminders and simple features, the app makes parenting more organized and stress-free.
            </p>
          </div>

          <div className="slide-image-container slide-image-left">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6a49561042bf1843ef82de21820a8b9a30cb4550?width=1596" 
              alt="Baby under good care" 
              className="slide-image"
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="carousel-controls">
        <button
          onClick={prevSlide}
          className="carousel-nav-btn carousel-prev"
          aria-label="Previous slide"
          onTouchStart={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              onTouchStart={(e) => e.stopPropagation()}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="carousel-nav-btn carousel-next"
          aria-label="Next slide"
          onTouchStart={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {totalSlides}
      </div>
    </div>
  );
};

export default Carousel;
