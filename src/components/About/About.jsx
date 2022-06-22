// Dependencies
import React from "react";
// Files
import JAVASCRIPT from "../../img/Javascript.png";
import HTML from "../../img/HTML.png";
import CSS from "../../img/CSS.png";
import REACT from "../../img/React.png";
import REDUX from "../../img/Redux.png";
import EXPRESS from "../../img/Express.png";
import POSTGRESQL from "../../img/PostgreSQL.png";
import SEQUELIZE from "../../img/Sequelize.png";
import LINKEDIN from "../../img/LinkedIn.png";
import GITHUB from "../../img/GitHub.png";
import MAIL from "../../img/Mail.png";
import styles from "./About.module.css";


function About()
{
    return(
        <div className={styles.Background}>
            <div className={styles.Card}>
                <div className={styles.Text}>
                    <h1>Pi-Videogames</h1>
                    
                    <p>This project was created as part of my fullstack developer education at <a href="https://www.soyhenry.com">Henry bootcamp</a>.
                    To loop through all the different videogames, this app consumes data from the <a href="https://rawg.io">Rawg API</a>.
                    Using the first 100 videogames, for performance reasons.
                    </p>
                    
                    <p>It is also possible to "create" a new videogame, entering a name, description, release date, rating, genres, platforms and an image.</p>
                    
                    <p>Any feedback you can provide will be greatly appreciated. Thank you, and don't forget to create your own videogame!</p>
                </div>
                
                <h1>Some used technologies</h1>
                
                <div className={styles.Technologies}>
                    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                        <img src={JAVASCRIPT} alt="Javascript" />
                        <p>Javascript</p>
                    </a>
                    
                    <a href="https://developer.mozilla.org/es/docs/Web/HTML">
                        <img src={HTML} alt="HTML" />
                        <p>HTML</p>
                    </a>
                    
                    <a href="https://developer.mozilla.org/es/docs/Web/CSS">
                        <img src={CSS} alt="CSS" />
                        <p>CSS</p>
                    </a>
                    
                    <a href="https://es.reactjs.org">
                        <img src={REACT} alt="React" />
                        <p>React</p>
                    </a>
                    
                    <a href="https://redux.js.org">
                        <img src={REDUX} alt="Redux" />
                        <p>Redux</p>
                    </a>
                    
                    <a href="https://expressjs.com">
                        <img src={EXPRESS} alt="Express" />
                        <p>Express</p>
                    </a>
                    
                    <a href="https://www.postgresql.org">
                        <img src={POSTGRESQL} alt="PostgreSQL" />
                        <p>PostgreSQL</p>
                    </a>
                    
                    <a href="https://sequelize.org">
                        <img src={SEQUELIZE} alt="Sequelize" />
                        <p>Sequelize</p>
                    </a>
                </div>
                
                <h1>Contact</h1>
                
                <div className={styles.Contact}>
                    
                    <a href="https://www.linkedin.com/in/juan-pablo-llorente/">
                        <img src={LINKEDIN} alt="LinkedIn" />
                        <p>LinkedIn</p>
                    </a>
                    
                    <a href="https://github.com/JuanPablo-Llorente">
                        <img src={GITHUB} alt="GitHub" />
                        <p>GitHub</p>
                    </a>
                    
                    <a href="mailto:juanpablollorentej@gmail.com">
                        <img src={MAIL} alt="E-mail" />
                        <p>E-mail</p>
                    </a>
                    
                </div>
                
                <h4>juanpablollorentej@gmail.com</h4>
            </div>
        </div>
    );
};


export default About;