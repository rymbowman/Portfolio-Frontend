import { useEffect, useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

const Slideshow = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [image1, image2, image3, image4, image5, image6];

  const currentSlide = (n) => {
    let newSlideIndex = currentSlideIndex + n;
    if (newSlideIndex >= slides.length) {
      newSlideIndex = 0;
    }
    if (newSlideIndex < 0) {
      newSlideIndex = slides.length - 1;
    }
    setCurrentSlideIndex(newSlideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      currentSlide(1);
    }, 7000);

    return () => {
      clearInterval(slideInterval);
    };
  });

  return (
    <div className="slideshow-images-container">
      {slides.map((slide, index) => (
        <img
          className={`carousel-img ${
            index === currentSlideIndex ? "active" : ""
          }`}
          src={slide}
          key={index}
        />
      ))}
    </div>
  );
};

export default Slideshow;
