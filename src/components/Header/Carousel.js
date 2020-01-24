import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Natural from "../../img/Header/natural.jpg"
import Natural1 from "../../img/Header/natural 1.jpg"
import Natural2 from "../../img/Header/natural 4.jpg"
import Natural3 from "../../img/Header/natural 5.jpg"



// create alt for image

function Carouselslider() {
    return (
        <Carousel className="m-0" autoPlay showThumbs={false} showStatus={false} dynamicHeight showArrows={false} style={{ height: "auto" }}>
            <div>
                <img className="carouselImg" src={Natural} alt="natural" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img className="carouselImg" src={Natural1} alt="natural1" />
                <p className="legend" >Legend 2</p>
            </div>
            <div>
                <img className="carouselImg" src={Natural2} alt="natural2" />
                <p className="legend" >Legend 3</p>
            </div>
            <div>
                <img className="carouselImg" src={Natural3} alt="natural3" />
                <p className="legend" >Legend 3</p>
            </div>
        </Carousel>
    )
}

export default Carouselslider;

