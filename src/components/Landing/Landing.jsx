// Dependencies
import React from "react";
import {Link} from "react-router-dom";
// Files
import styles from "./Landing.module.css";


function Landing()
{
    return (
        <div className={styles.LandingPage}>
            <h1 className={styles.Title}>Welcome to the videogames page!</h1>
            <div className={styles.Button}>
                <Link to="/home">
                    <button className={styles.Continue}><span>Continue</span></button>
                </Link>
            </div>
        </div>
    );
};


export default Landing;