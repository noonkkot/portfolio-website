// components/About.js
import React from 'react';

function About() {
  return (
    <article id="article">
      <div className="articleWrap">
        <div className="about-img">
          <div className="about-img-top"></div>
          <div className="about-img-bottom"></div>
        </div>
        <div className="about-txt">
          <h2>ABOUT</h2>
          <h4>PROFILE</h4>
          <p>name</p>
          <p>phone</p>
          <p>e-mail</p>
          <h4>CAREER</h4>
          <p></p>
          <h4>SKILLS</h4>
          <span className="skill">#HTML</span>
          <span className="skill">#CSS</span>
          <span className="skill">#Javascript</span>
          <span className="skill">#React.js</span>
          <span className="skill">#Vue.js</span>
          <span className="skill">#SCSS</span>
          <h4>CERTIFICATE</h4>
          <p>Craftsman Web Design</p>
        </div>
      </div>
    </article>
  );
}

export default About;
