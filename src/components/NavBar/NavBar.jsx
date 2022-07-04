// Dependencies
import React from "react";
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
                    <button onClick={handleScrollAbout} className={styles.AboutMe}>About</button>
                    
                    <button onClick={handleScrollStack} className={styles.MyStack}>Stack</button>
                    
                    <button onClick={handleScrollProjects} className={styles.Projects}>Projects</button>
                    
                    <button onClick={handleScrollContact} className={styles.Contact}>Contact</button>
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