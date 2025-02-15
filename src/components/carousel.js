import { useState, useEffect } from "react";

export const Carousel = ({
  listText,
  autoSlide = true,
  autoSlideInterval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = listText.length;

  // Handle auto-slide
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, totalSlides]);

  // Handle manual navigation
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className="relative flex flex-col max-w-lg w-4/6  justify-center mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {listText.map((text, index) => (
          <div
            key={index}
            className="w-full min-w-full h-auto flex flex-col justify-center items-center bg-blaze-orange-50  rounded-3xl border-blaze-orange-600 border-2 text-center p-4"
          >
            <p className="text-lg font-medium text-blaze-orange-950">
              {text.quote}
            </p>
            <p className="text-sm text-blaze-orange-600"> ~~ {text.author}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 p-2  text-blaze-orange-600 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2  text-blaze-orange-600 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        ❯
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {listText.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index
                ? "bg-blaze-orange-500 scale-125"
                : "bg-gray-400 scale-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
