import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import Slide1 from '../../assets/img/carousal/side7.jpg';
import Slide2 from '../../assets/img/carousal/coffee.jpg';
import Scroll from '../Scroll/Scroll-Down';

const Crousel = () => {
    return (
        <div id="home">
         <Carousel controls={false} indicators interval={2500} pauseOnHover={false} >
         <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide2} alt="Second slide"/>
           </Carousel.Item>
           </Carousel>   
           <Scroll />
         </div>
    )
}

export default Crousel

