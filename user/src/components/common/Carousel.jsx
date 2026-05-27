import { useEffect, useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const nextImage = new Image();
    nextImage.src = slides[(currentSlide + 1) % slides.length];
  }, [currentSlide, slides]);

  return (
    <div className="relative aspect-[3/2] w-full max-w-full overflow-hidden rounded-[24px] bg-black sm:h-[460px] sm:aspect-auto md:h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            className="h-full w-full object-cover object-center"
            alt={`Turf ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : "low"}
            decoding="async"
          />
        </div>
      ))}
      {slides.length > 1 && (
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">
            ❮
          </button>
          <button onClick={nextSlide} className="btn btn-circle">
            ❯
          </button>
        </div>
      )}
    </div>
  );
};


export default Carousel;
