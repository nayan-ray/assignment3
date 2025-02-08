import React from 'react'
import heroPicture from "../../../public/heropicture.avif"
import "./hero.css"

const Hero = () => {
  return (
    <div>
      <div  className="hero">
        <div className="hero-container">

            <div className="hero-wrapper">
                <div className="hero-left d-flex align-items-center justify-content-center">
                     <div className="left-top">
                           <h1> I  <span>AM</span> </h1>
                           <p>A SOFTWARE ENGINEER</p>
                           <button className=''>Hire Me </button>
                     </div>
                      
                </div>
                <div className="hero-right">
                    <img  src={heroPicture} alt="" />
                </div>
                
            </div>
            
        </div>
    
    </div>
    </div>
  )
}

export default Hero
