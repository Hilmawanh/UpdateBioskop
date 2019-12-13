import React, { Component } from "react";

import Slider from "react-slick";

import Karo1 from "../images/karo1.jpg";
import Karo2 from "../images/karo2.jpg";
import Karo3 from "../images/karo3.jpg";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    };
    return (
       
      <div className="my-5">
        <center>
          <Slider {...settings}>
            <div>
              <img
                src={Karo1}
                alt=""
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div>
              <img
                src={Karo2}
                alt=""
                style={{ height: "500px", width: "600px" }}
              />
            </div>
            <div>
              <img
                src={Karo3}
                alt=""
                style={{ height: "500px", width: "500px" }}
              />
            </div>
          </Slider>
        </center>
      </div>
    );
  }
}
export default SimpleSlider;
