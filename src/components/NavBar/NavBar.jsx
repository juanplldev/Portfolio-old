// Dependencies
import React from "react";
import {Link} from "react-router-dom";
// Files
import styles from "./NavBar.module.css";
import Icon from "../../img/TagIcon.png";

function NavBar()
{
    return (
        <div className={styles.NavBar}>
            <div className={styles.Container}>
                <div className={styles.Icon}>
                    <Link to="/">
                        <img src={Icon} alt="Landing" />
                    </Link>
                </div>
                
                <div className={styles.Menu}>

                </div>
            </div>
        </div>
    );
};


export default NavBar;