import React from 'react';
import './CoreValues.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faLightbulb, faPeopleGroup, faStar} from '@fortawesome/free-solid-svg-icons';
const CoreValues = () => {
    const values = [
        {   icon: faHeart,
            title: 'Integrity',
            description: 'We uphold the highest standards of integrity in all our actions.',
        },
        {   icon: faLightbulb,
            title: 'Innovation',
            description: 'We strive to bring new ideas and creative solutions to the table.',
        },
        {   icon: faPeopleGroup,
            title: 'Community',
            description: 'We are committed to building a strong and supportive community.',
        },
        {   icon: faStar,
            title: 'Excellence',
            description: 'We aim for excellence in everything we do.',
        },
    ];

    return (
        <div className="core-values">
            <h2>Our Core Values</h2>
            <div className="values-list">
                {values.map((value, index) => (
                    <div key={index} className="value-item">
                        <FontAwesomeIcon icon={value.icon} className="value-icon" />
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValues;