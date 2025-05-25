import React from 'react';
import { assets } from '../../../../../assets/assets';
import './_structHero.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FounderData = [{
  description: `
  Cyril’s early life was marked by constant struggle. He was often sent home from school because his family couldn’t afford the fees. At times, even necessities like food were scarce. To survive, Cyril and his peers resorted to scavenging for scrap metal to sell. Life became even more precarious as he entered adolescence, with many 
  of his friends turning to crime, lured by the promise of a flashy lifestyle. Tragically, this path often led to fatal outcomes, with young lives lost to mob justice or police violence.`
},{
description: `Amid this chaos, Cyril’s resilience began to shine. In 2011, while still in high school, he founded a garbage collection group. The initiative not only provided a modest income for him and his peers but also instilled in him the power of collective action. Cyril used his earnings to pay his school fees, ultimately graduating in 2012. This project was a turning point, sparking a realization: children and youth in his community needed alternatives to the destructive paths so many were forced to take.`
},{
  description: `In 2013, Cyril’s leadership potential earned him a scholarship to study Community Development and Project Planning at the Regional Institute of Business Management. Armed with newfound knowledge and skills, Cyril returned to his roots, determined to make a lasting impact.`
},
{
  description: `At just 21 years old, in July 2014, Cyril identified a simple yet powerful way to address one of his community’s critical needs: education. He established the Smallest Library in Africa, starting with an open-air space to provide children with access to books and a quiet place to read. This initiative was more than just a library; it was a beacon of hope, symbolizing the transformative power of education.`
},{
  description: `
  Over the years, the Smallest Library in Africa has evolved into a literacy powerhouse. What began as a humble collection of books has grown into a movement that conducts book drives and establishes libraries in remote schools and underserved communities. Beyond improving literacy, the library has united the community, demonstrating that lasting change is possible when people come together.`
},{
  description: `
  Today, the Smallest Library in Africa continues to inspire. It not only provides educational resources but also fosters a sense of possibility and pride among the children and youth it serves. Cyril’s journey from a struggling boy in the slums to a community leader and changemaker is a testament to the resilience of the human spirit and the power of education to transform lives.`
}
]

const _structHero = () => {
  return (
    <div className='struct-hero'>
      <div className='struct-hero-container'>
        <div className='hero__-content'>
          <div className='hero-image'>
            <img src={assets.Founder} alt="Founder Cyril Peter Odhiambo" />
          </div>
        </div>
        <div className='hero__-content'>
          <h1>About Our Founder</h1>
          <h4>Cyril Peter Odhiambo</h4>
          <h5>A Story of Resilience: The Journey of Cyril Otieno and the Smallest Library in Africa</h5>
          <div className='p_graph'>
            <p>
              Cyril Otieno’s story is one of courage, perseverance, and an unyielding commitment to his community.
              Growing up in the Mugure slums of Kenya, Cyril faced a myriad of socio-economic challenges that could
              have easily deterred him from dreaming of a better future. Yet, it was these very hardships that fueled
              his determination to create change.
            </p>
            <div className='social-links'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
       <div className='text_container'>
      {FounderData.map((texts, index)=>(
        <div className="paragraph" key={index}>
          <p>{texts.description}</p>
        </div>
      ))}
        </div>
      </div>
      
    </div>
  );
};

export default _structHero;
