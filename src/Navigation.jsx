import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Hero from "./Hero";
import Resume from "./Resume";
import Contactme from "./Contactme";
import Fotter from "./Fotter";
function Navigation(){
    return(
        <>
        
        <Routes>
            <Route index element = {<Hero />}/>
            <Route path = "/projects" element = {<Projects />}/>
            <Route path = "/resume" element = {<Resume />}/>
            <Route path = "/contactme" element = {<Contactme />}/>
            
        </Routes>
        <Fotter/>
        </>
    )
}
export default Navigation