import React from 'react';
import "./workexp.css";
import Image1 from "../../Assets/computer.png";
import Image2 from "../../Assets/computer.png";
import Image3 from "../../Assets/computer.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Work Experience-Fujitsu Ltd. (Head Office) UK 29th July - 9th August 2019",
    description:
    <ul>
    <li>Skills and Knowledge gained through this Work Experience:</li>
    <li>1. Presented a website to the Byte Team.</li>
    <br></br>
    <li>2. Learned how to use React and VS code.</li>
    <br></br>
    <li>3. Developed my existing understanding of Agile Methodology and how it is used in Fujitsu.</li>
  </ul>
  },
  {
    id: 2,
    image: Image2,
    title: "Work Experience - British Airways Plc. (Head Office) UK 20th-24th Feb 2017",
    description:
    <ul>
    <li>Skills and Knowledge gained through this Work Experience:</li>
    <li>1. Worked on a team project and I made a website to summarise and promote the product we were selling.</li>
    <br></br>
    <li>2. When creating the website I need to plan so I created wireframes and a prototype of the website.</li>
  </ul>
  },
  {
    id: 3,
    image: Image3,
    title: "Work Experience - Canon Europe Ltd (Head Office) 22nd - 26th Aug 2016",
    description:
    <ul>
    <li>Skills and Knowledge gained through this Work Experience:</li>
    <li>1. Shadowing and networking with the Digital Operations team specialists</li>
    <br></br>
    <li>2. Designing and creating wireframes of web pages. </li>
    <br></br>
    <li>3. Creation of a mini website as part of my first project. </li>
  </ul>
  },
];


const Workexp = () => {
  return (
    <section className="workexp container section" id="workexp">
      <h2 className="section__title">Work Experience</h2>

      <div className="workexp__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="workexp__card" key={id}>
              <img src={image} alt="" className="workexp__img" />

              <h3 className="workexp__titles">{title}</h3>
              <p className="workexp__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Workexp