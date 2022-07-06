// Dependencies
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// Files
import {scrollToAbout, scrollToStack, scrollToProjects, scrollToContact} from "../../handlers/handlers";
import CloseTagIcon from "../../img/CloseTagIcon.png";
// import About from "../../img/About.png";
// import Stack from "../../img/Stack.png";
// import Projects from "../../img/Projects.png";
// import Contact from "../../img/Contact.png";
import styles from "./NavBar.module.css";


function NavBar()
{
    const navigate = useNavigate();
    const height = window.innerHeight;
    const aboutIndicator = height - 70;
    const stackIndicator = window.innerWidth <= 1024 ? height * 3 - 70 : height * 2 - 70;
    const projectsIndicator = window.innerWidth <= 1024 ? height * 5 - 70 : height * 3 - 70;
    const contactIndicator = projectsIndicator + height;
    const homeLocation = window.location.pathname === "/home" ? true : false;
    const [actualHeight, setActualHeight] = useState(window.visualViewport.pageTop);
    
    window.addEventListener("scroll", () => {
        setActualHeight(window.visualViewport.pageTop);
    });
    
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
                    <button onClick={handleScrollAbout} className={homeLocation && actualHeight < aboutIndicator ? styles.ActiveButton : styles.Button}>About</button>
                    
                    <button onClick={handleScrollStack} className={homeLocation && actualHeight >= aboutIndicator && actualHeight < stackIndicator ? styles.ActiveButton : styles.Button}>Stack</button>
                    
                    <button onClick={handleScrollProjects} className={homeLocation && actualHeight >= stackIndicator && actualHeight < projectsIndicator ? styles.ActiveButton : styles.Button}>Projects</button>
                    
                    <button onClick={handleScrollContact} className={homeLocation && actualHeight >= projectsIndicator && actualHeight < contactIndicator ? styles.ActiveButton : styles.Button}>Contact</button>
                </div>
                
                <div className={styles.SwitcherContainer}>
                    <input type="checkbox" id={styles.Switcher}/>
                    <label for={styles.Switcher} className={styles.SwitchLabel}>
                        <label htmlFor={styles.SwitchLabel} className={styles.SwitchLabelIcon}></label>
                    </label>
                </div>
            </div>
        </div>
    );
};


export default NavBar;