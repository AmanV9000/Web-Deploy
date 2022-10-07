import React from 'react';
import "./home.css";
import Me from "../../Assets/PROFILEPIC.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";


const Home = () => {
  return (
    <section className = "home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Aman Verma</h1>
        <span className="home__education">I am a Computer Science Student at University of Portsmouth. Feel free to check out my socials below!</span>

        <HeaderSocials />

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home