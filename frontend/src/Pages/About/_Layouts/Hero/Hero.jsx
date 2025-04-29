import React from 'react'
import './Hero.css'
import {assets} from '../../../../assets/assets'
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="two_images-top-left">
        <div className="image1">
          <img src={assets.image1} alt="" />
        </div>
        <div className="image2">
          <img src={assets.image2} alt="" />
        </div>
        </div>

<div className="text__center">
  <div className="text__description">
    <div className="heading">
      <h1></h1>
    </div>
    <div className="paragraph">

    </div>
<div className="btns">
  <button className="btn">Get Involved</button>
  <button className="btn">Donate</button>
</div>
  </div>
</div>
<div className="two_images-top-right">
        <div className="image3">
          <img src={assets.image3} alt="" />
        </div>
        <div className="image4">
          <img src={assets.image4} alt="" />
        </div>
        </div>
        <div className="four_images-bottom">
        <div className="image5">
          <img src={assets.image5} alt="" />
        </div>
        <div className="image6">
          <img src={assets.image3} alt="" />
        </div>
        <div className="image7">
          <img src={assets.image4} alt="" />
        </div>
        <div className="image8">
          <img src={assets.image6} alt="" />
        </div>
</div>


    </div>
  )
}

export default Hero