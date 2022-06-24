// Dependencies
import React from "react";
import {Link} from "react-router-dom";
// Files
import styles from "./Landing.module.css";
import Video from "../../img/5.mp4";


function Landing()
{
    return (
        <div className={styles.LandingPage}>
            <div className={styles.Title}>
                <h1>Hi! I'm Juan.</h1>
                <h1>Welcome to my portfolio!</h1>
            </div>
            
            <div className={styles.Button}>
                <Link to="/home">
                    <button className={styles.Continue}><span>Know more</span></button>
                </Link>
            </div>
            
            <div className={styles.Background}>
                <video autoPlay loop muted src={Video}></video>
            </div>
        </div>
    );
};


export default Landing;