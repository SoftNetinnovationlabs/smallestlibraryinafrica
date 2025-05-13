import React from 'react'
import './Approach.css'
const Approach = () => {

    const assets = [
        {
            id: 1,
            title: "Education",
            description: 'access to safe and quality education for all children, regardless of their background or circumstances.',
        },
        {
            id: 2,
            title: "nutrition and Health",
            description: 'access to quality healthcare services, including preventive care, treatment, and mental health support.',
        },
        {
            id: 3,
            title: "Resilient livelihoods",
            description: 'sustainable practices that protect the environment and promote conservation.',
        },
       
    ]
  return (
    <div>
        <div className="approach">
            <h1>Our Approach</h1>
            <p>We are committed to creating a world where every child has the opportunity to thrive and reach their full potential. Our approach is centered around three key pillars:</p>
            <div className="approach-assets">
                {assets.map((asset) => (
                    <div className="approach-asset" key={asset.id}>
                        <h2>{asset.title}</h2>
                        <p>{asset.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Approach