import React from 'react'
import './embedded.css'
const embedded = () => {
  return (
<div className='embed'>  
    <h1>Featured</h1>
      <div className='body-tube'>
        <section className='content-tube'><iframe width="560" height="315" src="https://www.youtube.com/embed/y49UBPCCTBU?si=JvaJucMdRZkT8E3H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>
    <section className='content-tube'><iframe width="560" height="315" src="https://www.youtube.com/embed/yW2ZUpmngsk?si=gTDfOyAr2HtxDu49" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>
    </div>
    </div>
  )
}

export default embedded