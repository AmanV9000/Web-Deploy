import React from 'react';
import "./volunteering.css";
import Image1 from "../../Assets/p.png";
import Image2 from "../../Assets/p.png";
import Image3 from "../../Assets/p.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Google Developers Student Club (Team Member) 2021 – 2022",
    description:
    <ul>
    <li>Skills and Knowledge gained through this employment:</li>
    <li>1. Networked when assisting sessions and workshops.</li>
    <br></br>
    <li>2. Developed my understanding of React and learned how to use node.js efficiently.</li>
    <br></br>
    <li>3. Understood how to use GitHub to collaborate with the Core Team efficiently for the first time.</li>
    <br></br>
    <li>4. Learned about the business and website side of google technologies.</li>

  </ul>
  },
  {
    id: 2,
    image: Image2,
    title: "Portsmouth E-Sports Society Team Captain Sept 2021 - June 2022",
    description:
    <ul>
    <li>Skills and Knowledge gained through this employment:</li>
    <li>1. I am currently the captain of Portsmouth Pioneers (A valorant e-sports team for the university).</li>
    <br></br>
    <li>2. I network and get to know my team more which improved my confidence and communication skills as well as team-working skills too.</li>
    <br></br>
    <li>3. I make sure that the team gets enough time to practice for the tournaments that happen twice a week as well as make sure the 
      roster is available to play the matches on the day if not I will bring in subs to take over.</li>
      <br></br>
      <li>I also spectate games as well as take part in them when required to support the team and to make sure we all enjoy and have a good time.</li>
  </ul>
  },
  {
    id: 3,
    image: Image3,
    title: "BA Ambassador- British Airways Plc. (Head Office) 2017-2019",
    description:
    <ul>
    <li>Skills and Knowledge gained through this employment:</li>
    <li>1. Improved my confidence skills by hosting and presenting presentations in front of large crowds thats consisted of various year groups from years 8 to 11.</li>
    <br></br>
    <li>2. Developed my communication skills by learning how to approach an audience/customers in public and building long lasting networks at events too.</li>
    <br></br>
    <li>3. Improved my team-working skills by learning and experiencing how to work and communicate with a team that changes every event which also allowed me to network more. </li>
  </ul>
  },
];


const Volunteering = () => {
  return (
    <section className="volunteering container section" id="volunteering">
      <h2 className="section__title">Volunteering</h2>

      <div className="volunteering__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="volunteering__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="volunteering__titles">{title}</h3>
              <p className="volunteering__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Volunteering