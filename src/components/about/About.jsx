import React from 'react';
import "./about.css";
import Image from "../../Assets/Profile-Pic.jpeg";



const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Aman Verma, I currently study Computer Science Bsc at University of Portsmouth. 
              I am an experienced individual with demonstrated history of working in the computing and industry since the start of my secondary school days. 
              Since my first work experience in Canon, I was proactive and carried on looking for more opportunities that opened up doors to working with British Airways, Fujitsu and more! On the right hand side you can see my level of confidence in the following languages: 
            </p>
       
     

          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">100%</span>
              </div>

                <div className="skills__bar">
                  <span className="skills__percentage Html"></span>
                </div>
            </div>

            
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage Css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage JavaScript"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage Python"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage Java"></span>
              </div>
            </div>

          </div>
        </div>
      </div>


     
    </section>
  )
}

export default About