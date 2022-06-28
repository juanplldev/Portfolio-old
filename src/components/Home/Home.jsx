// Dependencies
import React from "react";
// Files
import About from "../About/About.jsx";
import Stack from "../Stack/Stack.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import styles from "./Home.module.css";


function Home()
{
    return (
        <div className={styles.Container}>
            <About/>
            <Stack/>
            <Projects/>
            <Contact/>
        </div>
    );
};


export default Home;