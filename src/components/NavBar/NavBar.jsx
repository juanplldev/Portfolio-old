// Dependencies
import React from "react";
import {Link} from "react-router-dom";
// Files
import styles from "./NavBar.module.css";
import OpenTagIcon from "../../img/OpenTagIcon.png";
import CloseTagIcon from "../../img/CloseTagIcon.png";


function NavBar()
{
    return (
        <div className={styles.NavBar}>
            <div className={styles.Container}>
                <div className={styles.Icon}>
                    <Link to="/">
                        <img src={OpenTagIcon} alt="Landing" />
                    </Link>
                </div>
                
                <div className={styles.Menu}>
                    <Link to="/about">
                        <button className={styles.AboutMe}>About me</button>
                    </Link>
                    
                    <Link to="/stack">
                        <button className={styles.MyStack}>My stack</button>
                    </Link>
                    
                    <Link to="projects">
                        <button className={styles.Projects}>Projects</button>
                    </Link>
                    
                    <Link to="contact">
                        <button className={styles.Contact}>Contact</button>
                    </Link>
                </div>
                
                <div className={styles.Icon}>
                    <Link to="/">
                        <img src={CloseTagIcon} alt="Landing" />
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default NavBar;