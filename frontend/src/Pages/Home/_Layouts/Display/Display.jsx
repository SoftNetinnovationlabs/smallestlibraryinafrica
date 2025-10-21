import React from 'react';
import { assets } from '../../../../assets/assets';
import './display.css';
import { Link } from 'react-router-dom';

const Display = () => {
    return (
        <div className='display'>
            <div className="display__container">
                <div className="display__content">
                    <div className="display__image">
                        <img src={assets.image4} alt="growth-vision" />
                        <div className='overlay-content'>
                            <div className="text">
                                <p>We foster a mindset of innovation, growth, and positive impact.</p>
                            </div>
                            <Link to={'/programs/youth-digital-space'} className='cta'>Our Programs</Link>
                        </div>
                    </div>
                </div>

                <div className="display__content">
                    <div className="display__image">
                        <img src={assets.image5} alt="community-engagement" />
                        <div className='overlay-content'>
                            <div className="text">
                                <p>Our programs empower communities through sustainable development.</p>
                            </div>
                            <Link to={'/our-work'} className='cta'>Explore Initiatives</Link>
                        </div>
                    </div>
                </div>

                <div className="display__content">
                    <div className="display__image">
                        <img src={assets.image6} alt="education-and-skills" />
                        <div className='overlay-content'>
                            <div className="text">
                                <p>We nurture talent and provide tools for lifelong learning and success.</p>
                            </div>
                            <Link to={'/our-work'} className='cta'>See How We Help</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;
