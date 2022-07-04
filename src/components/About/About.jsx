// Dependencies
import React from "react";
// Files
import styles from "./About.module.css";


function About()
{
    return(
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>About</h1>
            </div>
            
            <div className={styles.About}>
                <p className={styles.P}>
                    I'm a 20 years old Full Stack Web Developer and Master Builder from Buenos Aires, Argentina.
                    Mainly oriented to the Back End, though i like Front End too.
                </p>
                <p className={styles.P}>
                    As a good lover of logic, performance and order, I always seek to perform in the user experience and write a clean code.
                </p>
                <p className={styles.P}>
                    I'm passionate about the technological and computer world and I always find myself learning new things.
                </p>
            </div>
        </div>
    );
};


export default About;