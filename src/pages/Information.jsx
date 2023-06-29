import React from 'react'
import work from '../photo/work.png'

const Information = () => {
  return (
    <div className="info-container">
      <div className="info-imgContainer">
        <img src={work} alt="" className="info-img" width="1260" height="320" />
        <div className="info-imgText">
          <h1 className="info-imgTitle">Digital Storyteller</h1>  
          <h2 className="info-imgDesc">Handcrafting award winning digital experiences</h2>
        </div>      
      </div>
      <div className="info-textContainer">
        <div className="info-item">
         <h1 className="info-title">Who are We?</h1>
         <p className="info-decs"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?</p>
        </div>
        <div className="info-item">
        <h1 className="info-title">What We Do?</h1>
         <p className="info-decs">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
         </p>
         <a href="contact" className="button">Contact Us</a>
        </div>
      </div>

    </div>
  )
}

export default Information