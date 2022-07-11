// Dependencies
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// Files
import MenuModal from "../MenuModal/MenuModal.jsx";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import {scrollToAbout, scrollToStack, scrollToProjects, scrollToContact} from "../../handlers/handlers";
import CloseTagIcon from "../../img/CloseTagIcon.png";
import About from "../../img/About.png";
import Stack from "../../img/Stack.png";
import Projects from "../../img/Projects.png";
import Contact from "../../img/Contact.png";
import darkStyles from "./DarkNavBar.module.css";
import lightStyles from "./LightNavBar.module.css";

function NavBar()
{
    const navigate = useNavigate();
    
    const {language} = useContext(LanguageContext);
    
    const {theme} = useContext(ThemeContext);
    const [styles, setStyles] = useState(theme === "Dark" ? darkStyles : lightStyles);
    
    const [modalState, setModalState] = useState(false);
    
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [actualHeight, setActualHeight] = useState(window.visualViewport.pageTop);
    
    const aboutIndicator = height - 70;
    const stackIndicator = width <= 1024 ? height * 3 - 70 : height * 2 - 70;
    const projectsIndicator = width <= 1024 ? height * 5 - 70 : height * 3 - 70;
    const contactIndicator = projectsIndicator + height;
    const homeLocation = window.location.pathname === "/home" ? true : false;
    
    window.addEventListener("scroll", () => {
        setActualHeight(window.visualViewport.pageTop);
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
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
    
    async function handleScrollAbout()
    {
        navigate("/home");
        scrollToAbout();
    };
    
    async function handleScrollStack()
    {
        await navigate("/home");
        scrollToStack();
    };
    
    async function handleScrollProjects()
    {
        await navigate("/home");
        scrollToProjects();
    };
    
    async function handleScrollContact()
    {
        await navigate("/home");
        scrollToContact();
    };
    
    return (
        <div className={styles.Container}>
            <div className={styles.NavBar}>
                <div className={styles.Icon}>
                    <Link to="/">
                        <img src={CloseTagIcon} alt="Landing" />
                    </Link>
                </div>
                
                <div className={styles.Menu}>
                    <button onClick={handleScrollAbout} className={homeLocation && actualHeight < aboutIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 750 ? <img src={About} alt="About" />
                            :
                            language === "English" ? "About me"
                            :
                            "Sobre mí"
                        }
                    </button>
                    
                    <button onClick={handleScrollStack} className={homeLocation && actualHeight >= aboutIndicator && actualHeight < stackIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 750 ? <img src={Stack} alt="Stack" />
                            :
                            language === "English" ? "Stack"
                            :
                            "Herramientas"
                        }
                    </button>
                    
                    <button onClick={handleScrollProjects} className={homeLocation && actualHeight >= stackIndicator && actualHeight < projectsIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 750 ? <img src={Projects} alt="Projects" />
                            :
                            language === "English" ? "Projects"
                            :
                            "Proyectos"
                        }
                    </button>
                    
                    <button onClick={handleScrollContact} className={homeLocation && actualHeight >= projectsIndicator && actualHeight < contactIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 750 ? <img src={Contact} alt="Contact" />
                            :
                            language === "English" ? "Contact"
                            :
                            "Contacto"
                        }
                    </button>
                </div>
                
                <div className={styles.MenuIcon}>
                    <input type="checkbox" id={styles.MenuButton}/>
                    <label onClick={handleModalState} htmlFor={styles.MenuButton} className={styles.MenuButtonLabel}></label>
                </div>
                
                <MenuModal
                    modalState={modalState}
                />
            </div>
        </div>
    );
};


export default NavBar;