import React from "react";
import Hero from "../photo/Hero.png";

const Home = () => {

  return (
    <div className="home-container" >
      <div>
        <h1 className="welcome">Welcom to React App</h1>
      </div>
      <div className="container">
        <div className="item">
          <h1 className="title">Better design for your digital products.</h1>
          <p className="desc">
            Turning your Idea Reality. We bring together the teams from the
            glabal tech industry.
          </p>
          <a href="contact" className="button">Contact Us</a>
        </div>
        <div className="item">
          <img src={Hero} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
