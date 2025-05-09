import React from 'react'
import {assets} from '../../../../../assets/assets'
const _structHero = () => {
  return (
    <div className='struct-hero'>
        <div className='struct-hero-container'>
        <div className='hero__content'>
            <div className='hero-image'>
                <img src={assets.Founder} />
            </div>
        </div>
        <div className='hero__content'>
            <h1>about me</h1>
        </div>
        </div>
    </div>
  )
}

export default _structHero