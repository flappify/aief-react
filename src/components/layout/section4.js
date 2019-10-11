import React from "react";
import Slider from "react-slick";

class Section4 extends React.Component{
    render()
    {
        var settings = {
            infinite: true,
            speed: 500,
            autoplay:true,
            autoplaySpeed:5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
          };
        return(
            <div class="section4">
                <div className="main">
                    <div className="top">
                        <h1>Our Works</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's standard dummy text ever since<br/>
                        </p>
                    </div>
                    <div className="bottom">
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
                </div>
            </div>
        )
    }
}

export default Section4;