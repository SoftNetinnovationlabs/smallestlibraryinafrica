import React from 'react'

const DataResilientLivelihood = [{

            id: 3,
            title: "Resilient Livelihoods",
            description: 'We focus on implementing a career, internship, and entrepreneurship program that aims to provide information, build technical capacity, and equip youths—who are most vulnerable to unemployment, drug abuse, crime, and radicalization—with sustainable skills.',
            assets: assets.Livelihood,
            overlayText: 'Building brighter futures through opportunity'
        },

]
const ResilientLivelihood = () => {
  return (
    <div className="approach">
             <h1 className='approach__title'>Approach</h1>
             <p className='approach__paragraph'>we are committed to creating a world where every child has the opportunity to thrive and reach their full potential. Our approach is centered around three key pillars:</p>
             <div className="approach-assets">
                 {approachData.map((approach) => (
                     <div className="approach-asset" key={approach.id}>
                        <div className="approach__wrapper">
                         <div className="approach__content">
                              <h2>{approach.title}</h2>
                         <p>{approach.description}</p>
                         </div>
                         <div className="approach__content">
                              <div className='overlay_container'>
                              <img src={approach.assets}/>
                              <div className='overlay__body'>
                                 <p style={{color: 'white'}}>{approach.overlayText}</p>
                                 </div>
                              </div>
                         </div>
                        </div>
                     </div>
                 ))}
             </div>
         </div>
  )
}

export default ResilientLivelihood