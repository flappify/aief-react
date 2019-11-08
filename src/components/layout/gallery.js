import React from 'react';
import Gallery from "react-photo-gallery";
import Navbar from "./Navbar";
import Footer from './footer';
import "./gallery.css";
class PhotoGallery extends React.Component {
  componentDidMount(){
    window.onload=function(){
        document.querySelector('.full-gallery').style.display="block";
        document.querySelector('.load').style.display="none";
    }
}
  render() {
    const photos = [
      {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 4,
        height: 3
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 4,
        height: 3
      },
    ];
    return (
      <div>
        <div className="load">
                  <div className="divLoader">
                      <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
                      <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#F58634" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
                      </svg>
                  </div>
              </div>
        <div className="full-gallery">
            <Navbar/>
            <div className="gallery">
              <h1>Photo Gallery</h1>
              <Gallery photos={photos} direction={"column"}/>
            </div>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;