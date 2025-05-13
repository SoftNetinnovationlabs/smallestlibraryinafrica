import React from 'react'
import './Approach.css'
import { assets } from '../../../../assets/assets'
const Approach = () => {

    const approachData = [
        {
            id: 1,
            title: "Education",
            description:"Access to safe and quality education in the informal settlements continues to be a pipe dream to many families. School drop out is still on the rise , dilapidated classrooms , dismal ratio of numbers of students per teacher, lack of reading materials and conducive learning spaces at the community level. Our education work is improving the current learning infrastructure in slums by establishing community and school libraries , helping schools have access to clean water and cooking            kitchens.We also tackle the high drop out rates of pupils by providing scholarships to needy but bright children at primary , secondary and tertiary level.",
            assets: assets.education,
        },
        {
            id: 2,
            title: "nutrition and Health",
            description: 'Unsafe drinking water and severe food security due to poverty are some of the obvious drivers of malnutrition as 1 out of 3 children below 5 years are stunted.            We are working to improve access to clean water and sustainable feeding programs at both community and schooling level. Through this we are able to improve on the learning environment which is a critical element in             achieving high performance outcomes.',
            assets: assets.nutrition,
        },
        {
            id: 3,
            title: "Resilient livelihoods",
            description: 'sustainable practices that protect the environment and promote conservation.',    
            assets: assets.livelihoods,
         },
       
    ]
  return (
    <div>
        <div className="approach">
            <h1>Our Approach</h1>
            <p>We are committed to creating a world where every child has the opportunity to thrive and reach their full potential. Our approach is centered around three key pillars:</p>
            <div className="approach-assets">
                {approachData.map((approach) => (
                    <div className="approach-asset" key={approach.id}>
                       <div className="approach__wrapper">
                        <div className="approach__content">
                             <h2>{approach.title}</h2>
                        <p>{approach.description}</p>
                        </div>
                        <div className="approach__content">
                             <img src={approach.assets}/>
                        </div>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Approach