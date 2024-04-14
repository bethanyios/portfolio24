import React from "react";
import "../styling/navigation.css";

const Navigate = ({ setPage }) => {

  const handleClick = event => {
    event.preventDefault();
    setPage(event.target.id);
  };

  return (
    <>
    <section className="navbar">
      <li onClick={handleClick} id="home">
        Home
      </li>
      <li onClick={handleClick} id="projects" >
        Projects
      </li>
      <li onClick={handleClick} id="contact">
        Contact
      </li>
    </section>
    </>
  );
};


export {Navigate};