// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import MailModal from "../MailModal/MailModal.jsx";
import LinkedInRoundWhite from "../../img/LinkedInRoundWhite.png";
import GitHubWhite from "../../img/GitHubWhite.png";
import MailRoundWhite from "../../img/MailRoundWhite.png";
import LinkedInRoundBlack from "../../img/LinkedInRound.png";
import GitHubBlack from "../../img/GitHub.png";
import MailRoundBlack from "../../img/MailRound.png";
import darkStyles from "./DarkContact.module.css";
import lightStyles from "./LightContact.module.css";


function Contact()
{
    const {language} = useContext(LanguageContext);
    
    const {theme} = useContext(ThemeContext);
    const [styles, setStyles] = useState(theme === "Dark" ? darkStyles : lightStyles);
    
    const [modalState, setModalState] = useState(false);
    const width = window.innerWidth;
    
    window.addEventListener("keyup", key => {
        if(key.key === "Escape")
        {
            if(modalState === true)
            {
                setModalState(false);
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    });
    
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
    
    function handleModalState()
    {
        setModalState(!modalState);
    };
    
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>
                    {
                        language === "English" ? "Contact"
                        :
                        "Contacto"
                    }
                </h1>
            </div>
            
            <div className={styles.IconsContainer}>
                <div className={styles.Icon}>
                    <a href="https://www.linkedin.com/in/juanpll">
                        <img src={theme === "Dark" ? LinkedInRoundWhite : LinkedInRoundBlack} alt="LinkedIn" />
                    </a>
                </div>
                
                <div className={styles.MailIcon}>
                    <img src={theme === "Dark" ? MailRoundWhite : MailRoundBlack} alt="E-mail" onMouseEnter={width > 768 ? handleModalState : null} onClick={width <= 768 ? handleModalState : null}/>
                    <span></span>
                </div>
                
                <div className={styles.Icon}>
                    <a href="https://github.com/JuanPablo-Llorente">
                        <img src={theme === "Dark" ? GitHubWhite : GitHubBlack} alt="GitHub" />
                    </a>
                </div>
                
                <MailModal
                    modalState={modalState}
                    handleModalState={handleModalState}
                />
            </div>
        </div>
    );
};


export default Contact;