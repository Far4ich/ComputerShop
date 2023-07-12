import "../../../styles/PictureSlider.scss";
import React from "react";

function Slide({ picture }) {
  return (
    <div className="slide">
        <img src={picture} alt="" className="slide-image" />
    </div>
  );
}

export default Slide;