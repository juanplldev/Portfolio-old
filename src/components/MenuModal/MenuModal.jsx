// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import darkStyles from "./DarkMenuModal.module.css";
import lightStyles from "./LightMenuModal.module.css";


function MenuModal({modalState})
{
    const {language, setLanguage} = useContext(LanguageContext);
    
    const {theme, setTheme} = useContext(ThemeContext);
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
    
    function handleChangeTheme()
    {
        if(theme === "Dark")
        {
            setTheme("Light");
            window.localStorage.setItem("Theme", "Light");
        }
        else if(theme === "Light")
        {
            setTheme("Dark");
            window.localStorage.setItem("Theme", "Dark");
        };
    };
    
    function handleChangeLanguage()
    {
        if(language === "English")
        {
            setLanguage("Español");
            window.localStorage.setItem("Language", "Español");
        }
        else if(language === "Español")
        {
            setLanguage("English");
            window.localStorage.setItem("Language", "English");
        };
    };
    
    if(modalState === true)
    {
        return(
            <div className={styles.Background}>
                <div className={styles.Container}>
                    <div className={styles.LanguageContainer}>
                        <h3>
                            {
                                language === "English" ? "Language:"
                                :
                                "Idioma:"
                            }
                        </h3>
                        <button className={styles.Button} onClick={handleChangeLanguage}>{language}</button>
                    </div>
                    
                    <div className={styles.ThemeContainer}>
                        <h3>
                            {
                                language === "English" ? "Theme:"
                                :
                                "Tema:"
                            }
                        </h3>
                        {
                            language === "English" ?
                            <button className={styles.Button} onClick={handleChangeTheme}>{theme}</button>
                            :
                            theme === "Dark" ?
                            <button className={styles.Button} onClick={handleChangeTheme}>Oscuro</button>
                            :
                            <button className={styles.Button} onClick={handleChangeTheme}>Claro</button>
                        }
                    </div>
                    
                    <div className={styles.ResumeContainer}>
                        {
                            <button className={styles.Button}>
                                <a href="https://juanpablollorente-cv.vercel.app">
                                    {
                                        language === "English" ? "Resume"
                                        :
                                        "CV"
                                    }
                                </a>
                            </button>
                        }
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        return null;
    };
};


export default MenuModal;