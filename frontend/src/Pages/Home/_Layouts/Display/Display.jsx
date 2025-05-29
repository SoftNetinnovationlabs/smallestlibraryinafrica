import React from 'react'
import { assets } from '../../../../assets/assets'
import './display.css'
import { Link } from 'react-router-dom'
const Display = () => {
    return(
        <div className='display'>
            <div className="display__container">
                <div className="display__content">
                    <div className="display__image">
                        <img src={assets.image4} alt="" />
                         <div className='overlay-content'>
                            <div className="text">
                                <p>we believe in a our culture of growth and sustainability</p>
                            </div>
                            <Link to={'/about#programs'} className='cta'>Our Programs</Link>
                        </div>
                    </div>
                </div>
                <div className="display__content">
                    <div className="test">
           <div className="display__image">
                        <img src={assets.image5} alt="" />
                        <div className='overlay-content'>
                            <div className="text">
                                <p>we believe in a our culture of growth and sustainability</p>
                            </div>
                            <Link to={'/about#programs'} className='cta'>Our Programs</Link>
                        </div>
                    </div>
                    </div>
     
                </div>
                <div className="display__content">
                <div className="display__image">
                        <img src={assets.image6} alt="" />
                         <div className='overlay-content'>
                            <div className="text">
                                <p>we believe in a our culture of growth and sustainability</p>
                            </div>
                            <Link to={'/about#programs'} className='cta'>Our Programs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Display