import "../../../styles/PictureSlider.scss";
import React, { useContext } from "react";
import { SliderContext } from "./PictureSlider";
import Slide from "./Slide";

function SlidesList() {
  const { slideNumber, pictures } = useContext(SliderContext);

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {pictures.map((picture, index) => (
        <Slide key={index} picture={picture} />
      ))}
    </div>
  );
}

export default SlidesList;