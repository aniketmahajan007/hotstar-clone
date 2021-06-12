import React from "react";
import './ImageSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import One from '../../../asset/images/slider-badag.jpg';
import Two from '../../../asset/images/slider-badging.jpg';
import SlideImage from "./SlideImage";

function ImageSlider(){
    const setting = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        display: true
    }
    return(
      <div className="ImageSlider">
          <Slider  {...setting}>
              <SlideImage Image={One} />
              <SlideImage Image={Two} />
          </Slider>
      </div>
    );
}
export default ImageSlider;
