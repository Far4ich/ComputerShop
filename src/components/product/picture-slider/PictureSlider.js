import React, { useState, createContext } from "react";
import SliderArrows from "./SliderArrows";
import SlidesList from "./SlidesList";

export const SliderContext = createContext();

function PictureSlider({ pictures }) 
{
  const [slideNumber, setSlideNumber] = useState(0);

  const changeSlide = (direction) => 
  {
    let result = 0;

    if (slideNumber + direction < 0) 
    {
      result = pictures.length - 1;
    } 
    else 
    {
      result = (slideNumber + direction) % pictures.length;
    }

    setSlideNumber(result);
  };

  const goToSlide = (number) => 
  {
    setSlideNumber(number % pictures.length);
  };

  return (
    <div
      className="slider"
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: pictures.length,
          slideNumber: slideNumber,
          pictures: pictures,
        }}
      >
        <SliderArrows />
        <SlidesList />
      </SliderContext.Provider>
    </div>
  );
};

export default PictureSlider;