import React from 'react';
import "./exp.css";
import Data from './Data';
import Card from './Card';

const Exp = () => {
  return (
    <section className="exp container section" id="exp">
      <h2 className="section__title">Education/Experience</h2>

      <div className="exp__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>
      </div>
      </section>
  )
}

export default Exp;