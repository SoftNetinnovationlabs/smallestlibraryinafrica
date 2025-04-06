import React from 'react'
import { assets } from '../../../../assets/assets'
import './display.css'
const Display = () => {
    return(
        <div className='display'>
            <div className="display__container">
                <div className="display__content">
                    <div className="display__image">
                        <img src={assets.image4} alt="" />
                    </div>
                </div>
                <div className="display__content">
                <div className="display__image">
                        <img src={assets.image5} alt="" />
                    </div>
                </div>
                <div className="display__content">
                <div className="display__image">
                        <img src={assets.image6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Display