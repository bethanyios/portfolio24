  import React from "react";
  import patch from "../images/patch.svg"
  import patchi from "../images/patch.1.svg"
  import patchd from "../images/patchd.svg"
  import timeline1 from "../images/f14040.svg"
  import timeline2 from "../images/f14041.svg"
  import timeline3 from "../images/f14042.svg"
  import arrow from "../images/arrow.svg"


  import '../styling/home.css';

  const Home = () => {
    return (
      <>
        <div className="homepage"> 
        <img src={patchd} className="topleft" alt="background"/>
        <img src={patch} className="bottomleft" alt="background"/>
        <img src={patchi} className="topright" alt="background"/>
      
          <h1 className="name"> Bethany Scott</h1>
          <p className="role"> UX Designer</p>
      
          <div className="content-wrapper">
            <div className="values-container">
              <h3 className="value">
              Human centric design</h3>
              <h3 className="value">
              Advocate for the user</h3>
              <h3 className="value">
              Power of collaboration</h3>
              <h3 className="value">
              Functional beauty</h3>
              {/* <h3 className="value">
              Aesthetic usability</h3> */}
              {/* <h3 className="value">
              Lean & simplistic design</h3> */}
              <h3 className="value">
              Reflective research </h3>
          </div>
          <div className="experience-container">
              <p className="experience">
              <a href="https://www.yallacooperative.com/" target="_blank" rel="noreferrer" className="exp-title"> <img src={arrow} className="arrow" alt="link"/>Yalla Cooperative<br/></a> UX Designer & Researcher, Sept 2021-present</p>
              <p className="experience">
              <a href="https://sienna-website.vercel.app/" target="_blank" rel="noreferrer" className="exp-title"> <img src={arrow} className="arrow" alt="link"/>Sienna<br/></a> Co-founder: UX Designer & Developer, Mar 2020 - Aug 2021</p>
              <p className="experience">

              <a href="https://www.foundersandcoders.com/" target="_blank" rel="noreferrer" className="exp-title"> <img src={arrow} className="arrow" alt="link"/>Founders & Coders <br/></a> Full-time Coding Bootcamp, Oct 2019 - Mar 2020 </p>
              <p className="experience">
              <a href="https://www.together-uk.org/" target="_blank" rel="noreferrer" className="exp-title"> <img src={arrow} className="arrow" alt="link"/>Together For Mental Wellbeing<br/></a> HR Administrator, Jan - Oct 2019</p>
          </div> 
          </div>
          <div className="process-wrapper">
  <div className="process-container">
    <img  src={timeline1} className="t1" alt="process"/>
    <img  src={timeline2} className="t1" alt="process"/>
    <img  src={timeline3} className="t1" alt="process"/>
  </div>  
        
        </div>
      
    </div>
      
      </>
    );
    }

  export default Home;



