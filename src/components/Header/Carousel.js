import React from 'react'
// import Slider from '@farbenmeer/react-spring-slider';
import AwesomeSlider from 'react-awesome-slider';

// // react awsome slider
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';

// const AutoplaySlider = withAutoplay(AwesomeSlider);

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Natural from "../../img/Header/natural.jpg"
import Natural1 from "../../img/Header/natural 1.jpg"
import Natural2 from "../../img/Header/natural 4.jpg"
import Natural3 from "../../img/Header/natural 5.jpg"


// const slider = () => (
{/* <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    fillParent={true}
>
    <div style={{ 'height': '200px' }} data-src={require("../../img/Header/natural.jpg")} />
    <div data-src={require("../../img/Header/natural 1.jpg")} />
    <div data-src={require("../../img/Header/natural 4.jpg")} />
    <div data-src={require("../../img/Header/natural 5.jpg")} />
</AutoplaySlider>
// ); */}

// const slider = (
//     <Slider>
//         <div>
//             <img src={Natural} alt="natural" />
//         </div>
//         <div>
//             <img src={Natural1} alt="natural" />
//         </div>
//         <div>
//             <img src={Natural2} alt="natural" />
//         </div>
//         <div>
//             <img src={Natural3} alt="natural" />
//         </div>
//     </Slider>
// );


function Carouselslider() {
    return (
        <Carousel className="m-0" autoPlay showThumbs={false} showStatus={false} dynamicHeight showArrows={false} style={{ height: "auto" }}>
            <div>
                <img className="carouselImg" src={Natural} style={{}} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img className="carouselImg" src={Natural1} />
                <p className="legend" >Legend 2</p>
            </div>
            <div>
                <img className="carouselImg" src={Natural2} />
                <p className="legend" >Legend 3</p>
            </div>
        </Carousel>
    )
}

export default Carouselslider;

