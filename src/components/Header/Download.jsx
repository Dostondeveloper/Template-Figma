import React from 'react'
import image from '/a-image.png'
import image2 from '/g-image.png'
import telimg from '/Mockup.png'

export default function Download() {
  return (
    <div className='download__section'>
      <div className="text">
        <div className="download__image">
          <img src={telimg} alt="icon" />
        </div>
        <div className="download__text">
          <h2>Download app to enjoy more!</h2>
          <p>Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>
          <img src={image} alt="icon" />
          <img src={image2} alt="icon" />
        </div>
      </div>
    </div>
  )
}
