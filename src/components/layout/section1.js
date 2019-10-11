import React from "react";
import Slider from "react-slick";
 
class Section1 extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:false,
    };
    return (
      <div className="section1">
          <Slider {...settings}>
        <div className="slider-item">
          <img src="https://images.wallpaperscraft.com/image/deer_art_vector_134088_1920x1080.jpg" alt="slide1" />
        </div>
        <div className="slider-item">
          <img src="https://images.wallpaperscraft.com/image/deer_art_vector_134088_1920x1080.jpg" alt="slide1" />
        </div>
        <div className="slider-item">
          <img src="https://images.wallpaperscraft.com/image/deer_art_vector_134088_1920x1080.jpg" alt="slide1" />
        </div>
      </Slider>
      </div>
    );
  }
}

export default Section1;