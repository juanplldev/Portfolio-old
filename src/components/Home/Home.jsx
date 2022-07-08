// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import About from "../About/About.jsx";
import Stack from "../Stack/Stack.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import ThemeContext from "../../contexts/ThemeContext";
import darkStyles from "./DarkHome.module.css";
import lightStyles from "./LightHome.module.css";


function Home()
{
    const {theme} = useContext(ThemeContext);
    const [styles, setStyles] = useState(theme === "Dark" ? darkStyles : lightStyles);
    
    useEffect(() => {
        if(theme === "Dark")
        {
            setStyles(darkStyles);
        }
        else if(theme === "Light")
        {
            setStyles(lightStyles);
        };
    }, [theme]);
    
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