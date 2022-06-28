// Dependencies
import React from "react";
// Files
import styles from "./About.module.css";


function About()
{
    return(
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>About me</h1>
            </div>
            
            <div className={styles.About}>
                <p className={styles.P}>
                    I'm a Full Stack Web Developer, mainly oriented to the Back End, as well as being a Master Builder.
                </p>
                <p className={styles.P}>
                    I started studying programming in 2021, starting with C and reaching my current Stack: JavaScript, HTML, CSS, React, Redux, NodeJs, Express, Sequelize, PostgreSQL.
                </p>
                <p className={styles.P}>
                    I'm passionate about the technological and computer world and I always find myself learning new things.
                </p>
            </div>
        </div>
    );
};


export default About;