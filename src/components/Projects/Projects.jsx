// Dependencies
import React from "react";
// Files
import VideogamesImg from "../../img/Videogames.png";
import DigitalizArteImg from "../../img/DigitalizArte.png";
import GitHubWhite from "../../img/GitHubWhite.png";
import Website from "../../img/Website.png";
import styles from "./Projects.module.css";


function Projects()
{
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>My projects</h1>
            </div>
            
            <div className={styles.ProjectsContainer}>
                <div className={styles.Card}>
                    <img className={styles.Background} src={VideogamesImg} alt="Img"/>
                    
                    <div className={styles.Layer}>
                        <h2>Videogames SPA</h2>
                        <p>
                            An encyclopedia of video games made as my individual project for <a href="https://www.soyhenry.com">Henry's</a> bootcamp.
                        </p>
                        
                        <div className={styles.Links}>
                            <a href="https://videogames-app-two.vercel.app"><img src={Website} alt="Website"/></a>
                            <a href="https://github.com/JuanPablo-Llorente/PI-Videogames-main"><img src={GitHubWhite} alt="GitHub"/></a>
                        </div>
                    </div>
                </div>
                
                <div className={styles.Card}>
                    <img className={styles.Background} src={DigitalizArteImg} alt="Img"/>
                    
                    <div className={styles.Layer}>
                        <h2>DigitalizArte</h2>
                        <p>
                            An art e-commerce with a small social network system made with six more co-workers as final project for <a href="https://www.soyhenry.com">Henry's</a> bootcamp.
                        </p>
                        
                        <div className={styles.Links}>
                            <a href="https://pg-frontend-eight.vercel.app"><img src={Website} alt="Website"/></a>
                            <a href="https://github.com/BugalloF/PG-Backend"><img src={GitHubWhite} alt="GitHub"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Projects;