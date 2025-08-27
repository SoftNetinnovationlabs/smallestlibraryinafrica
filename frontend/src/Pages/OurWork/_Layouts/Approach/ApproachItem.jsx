// ApproachItem.jsx
import React from 'react';
import './Approach.css';
import { assets } from '../../../../assets/assets';
import { Svgs } from '../../../../assets/svgs/svgs';


const ApproachItem = ({ title, description, asset, overlayText, BgSvg }) => {
  return (
    <div className="approach-asset" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {BgSvg && (
        <div className="bg-svg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <BgSvg style={{ width: '100%', height: '100%' }} />
        </div>
      )}

      <div className="approach__wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <div className="approach__content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="approach__content">
          <div className="overlay_container">
            <img src={asset} alt={title} />
            <div className="overlay__body">
              <p style={{ color: 'white' }}>{overlayText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachItem;




export const Education = () => {
  return (
    <ApproachItem
    bgSvg={Svgs.EducationSvg}
      title="Education"
      description="Access to safe and quality education in the informal settlements continues to be a pipe dream to many families. School drop out is still on the rise, dilapidated classrooms, dismal ratio of students per teacher, lack of reading materials, and conducive learning spaces at the community level. Our education work is improving the current learning infrastructure in slums by establishing community and school libraries, helping schools have access to clean water and kitchens. We also tackle high dropout rates by providing scholarships to needy but bright children at primary, secondary, and tertiary levels."
      asset={assets.education}
      overlayText="Empowering minds through education"
    />
  );
};



export const Nutrition = () => {
  return (
    <ApproachItem
      title="Nutrition and Health"
      description="Unsafe drinking water and severe food insecurity due to poverty are some of the obvious drivers of malnutrition, with 1 in 3 children under five being stunted. We are working to improve access to clean water and sustainable feeding programs at both community and school levels. This supports a better learning environment, which is critical to achieving high performance outcomes."
      asset={assets.Nutrition}
      overlayText="Nourishing futures, one meal at a time"
    />
  );
}


export const Livelihood = () => {
  return (
    <ApproachItem
      title="Resilient Livelihoods"
      description="We focus on implementing a career, internship, and entrepreneurship program that aims to provide information, build technical capacity, and equip youths—who are most vulnerable to unemployment, drug abuse, crime, and radicalization—with sustainable skills."
      asset={assets.Livelihood}
      overlayText="Building brighter futures through opportunity"
    />
  );
};
