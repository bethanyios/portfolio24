import sienna from "../images/SIENNA-logo.svg"
import fac from "../images/FAC-logo.svg"
import together from "../images/together-logo.svg"
import yalla from "../images/yalla-logo.svg"

import patch1 from "../images/patch1.svg"
import patch2 from "../images/patch2.svg"
import patch3 from "../images/patch3.svg"


import '../styling/projects.css';

const Projects = () => {
  return (
<>
<img src={patch1} className="bg1" alt="background"/>
<img src={patch2} className="bg2" alt="background"/>
<img src={patch3} className="bg3" alt="background"/>

<div className="project-container">
<div className="logo-column">
<a href="https://www.yallacooperative.com/" rel="noreferrer" target="_blank"><img src={yalla} alt="logo" className="logo-y"/></a>
    <a href="https://www.yallacooperative.com/" rel="noreferrer" target="_blank">yallacooperative.com/</a>
</div>
    <div className="content-column">  
    <h1>Shannon Trust & The Ministry of Justice. </h1>
    <strong><p>UX Designer & Researcher, App Development (2021 - present) & Website Development (2022)</p></strong>
    <a href="https://www.shannontrust.org.uk/" target="_blank" rel="noreferrer">shannontrust.org.uk/</a>
    <p>Shannon Trust has been running a reading intervention program in prisons for over 20 years, 
      utilising physical books and peer learning. </p>
    <p>Over 50% of adult prisoners in the UK are illiterate, making it a critical social and equality issue. 90% of Shannon Trusts learners pursue further education. 
      The Ministry of Justice's initiative to reduce reoffending rates provided us with funding to digitise the program into an education tool.</p>
    <p>I was tasked with converting the exercises into digital formats through collaborative workshops with stakeholders, 
      using design thinking tailored specifically for this process. I oversaw the audio production which is a vital feature for accessibility given the usertype.
      I implemented various research methodologies, including remote and in-prison usability testing and a diary study. We found it was key not to infantilise the app as learning is already stigmatised. </p>
    <p>Since the pilot launch with 300 prison leavers across the Kent, Surrey and Sussex probation region, 
      I have conducted research for a community rollout, including a longitudinal diary study and user interviews. 
      This effort aims to develop a whitelabel app to be adopted by various organisations seeking to benefit from it.</p>
      <p className="last">Alongside this project, I designed and conducted research for the new Shannon Trust website.</p>
      
    <h1>Social Mobility Foundation. </h1>
    <strong><p>UX Designer & Project Manager, Website & Application Form Development (2022-present)</p></strong>
    <a href="https://app.socialmobility.org.uk/" target="_blank" rel="noreferrer">app.socialmobility.org.uk/</a>
    <p>The Social Mobility Foundation (SMF) has embarked on digital transformation. </p>
    <p>I undertook the redesign of the website and student application form with the goal of boosting
      conversion rates, including the Employer Index Report webpage catering to
      high-level companies that aim to assess their social mobility impact. </p>
    <p>To ensure ongoing feedback collection, I conducted weekly co-design sessions with students and held design
      thinking workshops involving various stakeholders. 
      I facilitated usability testing and compiled synthesis documentation using Notion to present my recommendations to stakeholders.</p>
    <p>Upon launching the transformed application form, tracked through Google Analytics, SMF observed a
      record-breaking influx of applicants within 24 hours. This outcome of boosted conversion rates stands as a testament to the
      effectiveness of the user-centered design approach I implemented.</p>
      <p className="last">As well as the UX designer, I was tasked with serving as Project Manager, a welcome challenge for me and an 
        opportunity to develop management skills. I used Github to manage the full website redevelopment and continued to design the user experience in collaboration with my cross-functional team.</p>
          
    <h1> The Scouts Association. </h1>
    <strong><p>UX Designer, Web App Development (2022 - present)</p></strong>
    <a href="https://digitalskills.scouts.org.uk/" target="_blank" rel="noreferrer">digitalskills.scouts.org.uk/</a>
    <p> The Scouts Association recognised the need to enhance the digital skills of their volunteers.</p>
    <p> The Digital Skills tool serves as a platform to access learning content. It evolved through the
          application of design thinking, incorporating a personalisation assessment to gauge learners'
          skill levels. We introduced the role of 'Digital Champion' –  through a forum or providing direct
          mentoring.</p>
    <p> Given the multifaceted nature of this tool, ensuring an intuitive user flow presented a challenge.
          I conducted user interviews and usability testing, revisiting early iterations to
          create a more streamlined design as its functionality expanded, thereby enhancing the user journey's intuitiveness.</p>
    <p> Throughout the process, volunteers participated in co-design workshop sessions and were
          involved in my research. Addressing accessibility needs for the learners was key given that they were usually older or had low digital skills; I ensured we met WCAG guidelines like not demanding precision and following a linear layout.</p>
    <p className="last"> The tool won runner-up in the Digital Leaders 100 Awards for the Digital
          Skills or Talent Initiative of the Year (Product or Service) category.</p>

    <h1> Chiltern Music Therapy.</h1>
    <strong><p>UX Designer, Website Development (2022)</p></strong>
    <a href="https://www.chilternmusictherapy.co.uk/" target="_blank" rel="noreferrer">chilternmusictherapy.co.uk/</a>
    <p>Chiltrn Music Therapy wanted to revitalise their digital presence and enhance accessibility to their diverse therapy offerings.</p>
    <p> Collaborating closely with stakeholders, I established website goals, KPIs, and formulated testable
          hypotheses. Once these parameters were defined, I orchestrated design thinking workshops,
          leading user persona and service journey mapping exercises. These activities allowed me to
          craft user stories that formed the foundation of the site's structure. Additionally, I designed a
          user-friendly CMS on Webflow, empowering the client to effortlessly implement updates and
          manage the website.</p>
    <p> My research indicated the significance of streamlining the enquiry process: guiding users
          through pertinent flows such as 'who we work with' and 'where we work'. This approach
          facilitated an intuitive journey through the site tailored to their specific needs.</p>
    <p className="last"> “From responding to our brief, to in person workshops to bring the vision to life to finally a brand
          new shiny website, it was a hugely positive experience. The focus that Yalla have on the user
          when building a website really did set them apart. We are so happy with the website we now
          have and the ability we have to make changes ourselves and to request changes from the dev
          team makes everything so much easier to manage.” - Katie Shushter, Chiltern Music Therapy</p>
    
    <h1> Trades Union Congress. </h1>
    <strong><p>UX Researcher & Facilitator, User Research (2023)</p></strong>
    <p>I conducted user research for the Trades Union Congress (TUC) concerning union members'
      experiences with the cost of living crisis. This initiative was essential for gaining deep insights
      into the challenges faced by workers. Through qualitative interviews with members from various
      unions, including the Royal Mail, I moderated research sessions to collect firsthand narratives.</p>
    <p>Using Notion, I compiled documentation by synthesising the findings, which I subsequently
      presented to several TUC stakeholders. I categorised the qualitative research to make the
      information easily interpretable, supplementing it with statistics to illustrate the range of opinions
      within the data. This documentation has been shared with the unions, with a focus on how the
      TUC can enhance its support for members through informative content.</p>
    <p>The research will empower the TUC to effectively advocate for policy changes aimed at
      addressing the needs and concerns of workers. By doing so, it ensures that their voices are
      heard and their struggles acknowledged in the pursuit of establishing a fair and sustainable
      economic landscape for all.</p></div>

</div>

<div className="project-container">
<div className="logo-column">
<a href="https://sienna-website.vercel.app/" target="_blank" rel="noreferrer"><img src={sienna} alt="logo"/></a>
    <a href="https://sienna-website.vercel.app/" target="_blank" rel="noreferrer">sienna.com/</a>
</div>
    <div className="content-column">
    <h1>Just Like Us.</h1>
    <strong><p>UX Designer (Jan - Mar 2021)</p></strong>
    <p>
    A user research project with CAST/Catalyst for LGBT+ organisation, 
    Just Like Us, to define a resource database and e-learning platform. 
    We built several prototypes and conducted usability and AB testing with a range of educators. 
    Our findings were then compiled for handover to another digital agency.
    </p>
    <p>Made with Figma, Miro, HackMD, Thinkific, LearnDash & Google docs.</p>
  
    <h1>Discovery Learning Programme.</h1>
    <strong><p>UX Designer (Sept - Oct 2020)</p></strong>
    <p> A discovery programme with CAST/Catalyst that involved collaborating with nine charity groups.
        The objective was to provide staff training in digital service design. The programme
        encompassed guiding these groups through a design sprint aimed at generating solutions for
        their diverse problem areas. We offered tailored support and coaching calls, assisting
        participants in assembling funding applications for subsequent development.</p>
    <p> We were granted the opportunity to devise our own workshops to conduct with various charities.
        This has allowed us to build our expertise and customise each project by selecting the most
        effective design sprint exercises for the respective user groups.</p>
    <p className="last"> Made with Miro.</p>
  
    <h1>CyberSafe Tool For Schools.</h1>
    <strong><p>UX Designer & Frontend Developer (Jun - Sept 2020)</p></strong>
    <p>A survey app for primary schools in Ireland on behalf of CyberSafeKids. This app is designed to
      assess cybersafety across all levels: leadership, teachers, and students. The primary goal of the
      tool is to prompt schools to prioritise cybersafety education for children and to allow them to
      showcase their certification to the public. Additionally, we have been contracted to provide
      ongoing maintenance for the app.</p>
    <p className="last">Made with Gatsby, Firebase, Airtable, Figma & Netlify CMS.</p>
   
    <h1>Cyber Break.</h1>
    <strong><p>UX Designer & Frontend Developer (Oct 2020)</p></strong>
    <p>Another project with CyberSafeKids involved creating a family quiz designed to assess
      cybersafety practices at home. The quiz was developed for the promotion of Digital Detox Day
      in Ireland and was subsequently expanded for future use.</p>
    <p className="last">Made with Figma, ReactJS & Airtable.</p>

    <h1>Collaborative Digital Training.</h1>
    <strong><p>UX Designer & Frontend Developer & UX Designer (May - June 2020) </p></strong>
    <p> A collaboratively designed MVP (Minimum Viable Product) for two charities, namely Social
        Action for Health and Pursuing Independent Paths. This was accomplished within a learning
        programme facilitated by CAST/Catalyst. The resulting product, Resource Centre, serves as a
        companion app for online video learning sessions. Through this app, the charities can share
        information and provide links to session resources, ensuring accessibility for all participants. The
        program also included training participants in Product Ownership, aiming to enhance their skills
        in digital service design.</p>
    <p> Made with Figma, ReactJS & Airtable.</p>

    <h1>My Best Life.</h1>
    <strong><p>UX Designer (Mar - May 2020)</p></strong>
    <p> A definition program in collaboration with three youth charities: Leap, The Mix, and UK Youth.
        This initiative was part of the second phase of an ongoing project managed by National
        Philanthropy Capital. Within this project, we undertook the task of defining and prototyping three
        apps: Youth Vote, Youth Coin, and The Recommender. Each of these prototypes was subjected
        to usability testing with various groups of young people.</p>
    <p>Made with Figma & Miro.</p>
    </div> 
</div>

<div className="project-container">
<div className="logo-column">
<a href="https://www.foundersandcoders.com/" rel="noreferrer" target="_blank"><img src={fac} alt="logo"/></a>
    <a href="https://www.foundersandcoders.com/" rel="noreferrer" target="_blank">foundersandcoders.com/</a>
</div>
    <div className="content-column">  
    <h1>SafeSpace.</h1>
    <strong><p>Scrum Lead (Feb 2020)</p></strong>
    <p>A website for the members of the Musician’s Union to report instances of sexual harassment or abuse in the workplace.</p>
    <p className="last"> 
      Made with ReactJs, Netlify Lamdas, Airtable, Figma & Cypress.
      </p>

    <h1>Signpost.</h1>
    <strong><p>UX Lead (Jan 2020)</p></strong>
    <p> A student project idea I proposed to develop an app that assists individuals at risk of homelessness in locating categorised services through a map interface.</p>
    <p> Made with ReactJs, Airtable & Figma.</p>
    </div>
</div>

<div className="project-container">
<div className="logo-column">
<a href="https://www.together-uk.org/" rel="noreferrer" target="_blank"><img src={together} alt="logo"/></a>
    <a href="https://www.together-uk.org/" rel="noreferrer" target="_blank">together-uk.org/</a>
</div>
    <div className="content-column">  
    <h1>Together for Mental Wellbeing.</h1>
    <strong><p>HR Administrator (Jan - Oct 2019)</p></strong>
    <p>I served as an administrator for the HR team in a mental health charity that deeply values
        service-user involvement. The head office oversees approximately 600 employees across
        services throughout the UK. In this role, I engaged with and supported staff and managers
        regularly, and I was responsible for taking minutes during disciplinary proceedings. This position
        provided me with a unique opportunity to gain insight into the inner workings of a charity.</p>
    <p> Furthermore, I played a role in the implementation of a new HR system. This experience offered
        valuable insights into the challenges and processes associated with integrating digital solutions
        within a charity. Drawing from my background as a developer and UX designer, I am particularly
        attuned to their perspective, which has proven beneficial in this context.</p>
    </div>
</div>

 </>
  );
}

export default Projects;
