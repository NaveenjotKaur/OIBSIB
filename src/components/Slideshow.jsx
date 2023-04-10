import React from 'react'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
// import img1 from '../assets/img1.jpg';
// import img1 from '../assets/img1.jpg';

const Slideshow = () => {
  return (
    <div class='slide'>
        <div class='slpic'><img class="slpi" src={img1} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img2} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img3} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img4} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img5} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img6} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img7} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img1} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img1} alt="img1"/></div>
        <div class='slpic'><img class="slpi" src={img1} alt="img1"/></div>
    </div>
  )
}

export default Slideshow