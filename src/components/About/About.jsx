// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import darkStyles from "./DarkAbout.module.css";
import lightStyles from "./LightAbout.module.css";

function About()
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
    
    return(
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>
                    {
                        language === "English" ? "About"
                        :
                        "Sobre mí"
                    }
                </h1>
            </div>
            
            <div className={styles.About}>
                <p className={styles.P}>
                    {
                        language === "English" ? `I'm a 20 years old Full Stack Web Developer and Master Builder from Buenos Aires, Argentina.
                        Mainly oriented to the Back End, though i like Front End too.`
                        :
                        `Soy un Desarrollador Web Full Stack y Maestro Mayor de Obras. Tengo 20 años y de Buenos Aires, Argentina.
                        Estoy orientado principalmente al Back End aunque también me gusta el Front End.`
                    }
                </p>
                <p className={styles.P}>
                    {
                        language === "English" ? "As a good lover of logic, performance and order, I always seek to perform in the user experience and write a clean code."
                        :
                        "Como buen amante de la lógica, el rendimiento y el orden, siempre busco desempeñarme en la experiencia del usuario y en escribir un código limpio."
                    }
                </p>
                <p className={styles.P}>
                    {
                        language === "English" ? "I'm passionate about the technological and computer world and I always find myself learning new things."
                        :
                        "Me apasiona el mundo tecnológico e informático y siempre me encuentro aprendiendo cosas nuevas."
                    }
                </p>
            </div>
        </div>
    );
};


export default About;