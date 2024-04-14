import patch5 from "../images/patch5.svg"
import patch6 from "../images/patch6.svg"

import '../styling/contact.css';


const Contact = () => {
  return (
<>
<img src={patch5} className="bg5" alt="background"/>
<img src={patch6} className="bg6"alt="background"/>
<div className="contact-container">
    <p className="paragraph">
    A passionate UX Designer dedicated to driving social impact by
    transforming user insights into intuitive solutions. </p>
    <p className="paragraph">Good design is in the balance if usability and aesthetic, crafting a seamless and experience that transcends
    functionality but includes all.<br /><br />
    <p className="paragraph">London based</p>
    <p className="paragraph">bethanyioscott@gmail.com</p>
    
    <h3>Thank you!</h3>
    </p>
    
      
{/* 
        <a className="contact-links" href="https://www.siennadev.com/" target="_blank" rel="noreferrer">○ sienna</a>
        <a className="contact-links" href="https://www.linkedin.com/in/bethanyioscott/" target="_blank" rel="noreferrer">○ linkedin</a>
        <a className="contact-links" href="https://www.codewars.com/users/bethanyios" target="_blank" rel="noreferrer">○ codewars</a> */}

  </div>
 </>
  );
}

export default Contact;
