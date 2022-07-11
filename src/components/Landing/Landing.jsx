// Dependencies
import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import Video from "../../img/LandingBackground.mp4";
import darkStyles from "./DarkLanding.module.css";
import lightStyles from "./LightLanding.module.css";


function Landing()
{
    const {language} = useContext(LanguageContext);
    
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
            <div className={styles.Title}>
                <h1>
                    {
                        language === "English" ? "Hi! I'm Juan."
                        :
                        "Hola! Soy Juan."
                    }
                </h1>
                <h1>
                    {
                        language === "English" ? "Welcome to my portfolio!"
                        :
                        "Bienvenido/a a mi portafolio!"
                    }
                </h1>
            </div>
            
            <div className={styles.Button}>
                <Link to="/home">
                    <button className={styles.Continue}>
                        <span>
                            {
                                language === "English" ? "Know more"
                                :
                                "Saber más"
                            }
                        </span>
                    </button>
                </Link>
            </div>
            
            <div className={styles.Background}>
                <video autoPlay loop muted src={Video}></video>
            </div>
        </div>
    );
};


export default Landing;