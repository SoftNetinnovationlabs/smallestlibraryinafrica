import React from 'react';
import './CoreValues.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faLightbulb,faPeopleGroup, faStar,faGlobe, faHands} from '@fortawesome/free-solid-svg-icons';

import {FaHandsHelping} from 'react-icons/fa'
const CoreValues = () => {
    const values = [
        {   icon: faLightbulb,
            title: 'Striving for Excellence',
            description: 'In every work we do we commit our best efforts',
        },
        {   icon: faHeart,
            title: 'Empathy',
            description: 'We see our work  from the perspective of our target beneficiaries',
        },
        {   icon:  faPeopleGroup,
            title: 'Compassion',
            description: 'We are committed to relieve hopelessness of every individual through our approaches',
        },
        {   icon: faGlobe,
            title: 'Diversity',
            description: 'We are committed to embracing everyone regardless of their region, race economice background and gender',
        },
        {   icon: faHands,
            title: 'Team Work',
            description: 'We believe that greater change comes when we work together',
        },
    ];

    return (
        <div className="core-values">
                       <div className='title'>
                <h2 className='value-title'>Our Core Values</h2>
                    <div className='title-design'></div>
                       </div>
            <div className="values-list">
                {values.map((value, index) => (
                    <div key={index} className="value-item">
                        <FontAwesomeIcon icon={value.icon} className="value-icon" />
             <h3>{value.title}</h3>
                        <p className='value-description'>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValues;