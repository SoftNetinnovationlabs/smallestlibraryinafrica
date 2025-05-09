import React from 'react'
import {assets} from '../../../../../assets/assets'
import './_structHero.css'
const _structHero = () => {
  return (
    <div className='struct-hero'>
        <div className='struct-hero-container'>
        <div className='hero__-content'>
            <div className='hero-image'>
                <img src={assets.Founder} />
            </div>
        </div>
        <div className='hero__content'>
            <h1>about Our Founder</h1>
            <h5>Cyril Peter Odhiambo</h5>
        </div>
        </div>
    </div>
  )
}

export default _structHero