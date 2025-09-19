import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FlowbiteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Mountain landscape with lake reflection",
      title: "Serene Mountain Lake"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      alt: "Forest path with sunlight filtering through trees",
      title: "Enchanted Forest Path"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      alt: "Ocean waves crashing on rocky shore",
      title: "Ocean Shore Sunset"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Auto-Play Flowbite Carousel
      </h1>
      
      <div 
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 shadow-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute block w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrevious}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-all duration-300">
            <ChevronLeft className="w-4 h-4 text-white" />
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-all duration-300">
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Auto-play controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            isAutoPlaying
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          {isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Hover over the carousel to pause auto-play</p>
        <p>Current slide: {currentIndex + 1} of {images.length}</p>
      </div>
    </div>
  );
};

export default FlowbiteCarousel;