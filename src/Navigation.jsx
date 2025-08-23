import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Hero from "./Hero";
import Resume from "./Resume";

function Navigation(){
    return(
        <>
        
        <Routes>
            <Route index element = {<Hero />}/>
            <Route path = "/projects" element = {<Projects />}/>
            <Route path = "/resume" element = {<Resume />}/>
        </Routes>
        </>
    )
}
export default Navigation;