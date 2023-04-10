import React from 'react'
import spic from '../assets/snorkeling.jpg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'

const Snorkeling = () => {
  return (
    <div>   
        <div class ='bg'>
            <div class='about'>
                <h1>What is Snorkeling?</h1>
                <p>
                    Snorkeling is a fun underwater activity done in the shallow area
                    of a water body to explore the aquatic life. It is done in the 
                    supervision of experts. Basic swimming skills are required to 
                    perform this activity.
                </p>
            </div>
            <div class='sphoto'>
                <img class='pic' src={spic}  alt="snorkeling pic" />
            </div>
        </div>
        <div>
            <div class='splacehead'>
                <h1>Popular Snorkeling Places</h1>
            </div>
            <div class='eg'>
                <div>
                    <div><img class='sppic' src={s1} alt="img1" /></div>
                    <div><h3 class='label'>Cairns</h3></div>
                </div>
                <div>
                    <div><img class='sppic' src={s2} alt="img2" /></div>
                    <div><h3 class='label'>Port Douglas</h3></div>
                </div>
                <div>
                    <div><img class='sppic' src={s3} alt="img3" /></div>
                    <div><h3 class='label'>Exmouth</h3></div>
                </div>
                <div>
                    <div><img class='sppic' src={s4} alt="img4" /></div>
                    <div><h3 class='label'>Rottnest Island</h3></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Snorkeling