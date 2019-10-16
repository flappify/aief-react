import React from "react";
import Slider from "react-slick";
class Section4 extends React.Component{
    state={
        tab:"tab",
        activetab:"tab-selected",
        hide:"none",
        show:"flex",
        tab1:"tab-selected",
        tab2:"tab",
        tab3:"tab",
        tab1detail:"tab-detail-selected",
        tab2detail:"tab-detail",
        tab3detail:"tab-detail",
    }
    handleShow1=()=>{
        if(this.state.tab1==="tab")
        {
            this.setState(() => ({
                tab1:"tab-selected",
                tab2:"tab",
                tab3:"tab",
                tab1detail:"tab-detail-selected",
                tab2detail:"tab-detail",
                tab3detail:"tab-detail",
            }));
        }
        console.log(this.state);
    }
    handleShow2=()=>{
        if(this.state.tab2==="tab")
        {
            this.setState(() => ({
                tab1:"tab",
                tab2:"tab-selected",
                tab3:"tab",
                tab1detail:"tab-detail",
                tab2detail:"tab-detail-selected",
                tab3detail:"tab-detail",
            }));
        }
        console.log(this.state);
    }
    handleShow3=()=>{
        if(this.state.tab3==="tab")
        {
            this.setState(() => ({
                tab1:"tab",
                tab2:"tab",
                tab3:"tab-selected",
                tab1detail:"tab-detail",
                tab2detail:"tab-detail",
                tab3detail:"tab-detail-selected",
            }));
        }
        console.log(this.state);
    }
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
            <div className="section4">
                <div className="main">
                    <div className="top">
                        <h1>Our Works</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="tab-list">
                            <div className="tabs">
                                <div className={this.state.tab1} onClick={this.handleShow1}>
                                    <h1>EDUCATION</h1>
                                </div>
                                <div className={this.state.tab2} onClick={this.handleShow2}>
                                    <h1>HEALTH</h1>
                                </div>
                                <div className={this.state.tab3} onClick={this.handleShow3}>
                                    <h1>UNITY</h1>
                                </div>
                            </div>
                            <div className="tabs-detail">
                                <div className={this.state.tab1detail}>
                                <Slider {...settings}>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/me-3.jpg" alt="slide1" />
        </div>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/me-4.jpg" alt="slide1" />
        </div>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/me-2.jpg" alt="slide1" />
        </div>
      </Slider>
                                </div>
                                <div className={this.state.tab2detail}>
                                <Slider {...settings}>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/sow-2.jpg" alt="slide1" />
        </div>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/sow-3.jpg" alt="slide1" />
        </div>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/sow-1.jpg" alt="slide1" />
        </div>
      </Slider>
                                </div>
                                <div className={this.state.tab3detail}>
                                <Slider {...settings}>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/swabhiman-1.jpg" alt="slide1" />
        </div>
        <div className="tab-item">
          <img src="https://www.smilefoundationindia.org/images/home/swabhiman-2.jpg" alt="slide1" />
        </div>
        <div className="tab-item">
          <img src="https://images.wallpaperscraft.com/image/deer_art_vector_134088_1920x1080.jpg" alt="slide1" />
        </div>
      </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section4;