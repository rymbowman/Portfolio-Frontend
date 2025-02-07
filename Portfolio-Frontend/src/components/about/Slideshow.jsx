import { useEffect, useState } from "react";
import image1 from "../../assets/images/image1.jpg";

const Slideshow = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [image1];

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
  }, [currentSlideIndex]);

  return <div>Slideshow</div>;
};

export default Slideshow;
