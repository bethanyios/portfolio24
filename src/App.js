import React from "react";

import Home from "./pages/home.js"
import Projects from "./pages/projects.js"
import Contact from "./pages/contact.js"
import {Navigate} from "./components/navigation.js"


function App() {
    const [page, setPage] = React.useState("home");
   
  if (page === "home") {
    return (
        <>
        <Navigate setPage={setPage}></Navigate>
        <Home />
        </>
        );
  } else if (page === "projects") {
    return (
        <>
        <Navigate setPage={setPage}></Navigate>
        <Projects />
        </>
    );
  } else if (page === "contact") {
    return (
        <>
        <Navigate setPage={setPage}></Navigate>
        <Contact />
        </>
    
    );

    
}
}


export default App;
