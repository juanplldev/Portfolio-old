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
import styles from "./Stack.module.css";


function Stack()
{
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>My stack</h1>
            </div>
            
            <div className={styles.Stack}>
                <section className={styles.FirstStack}>
                    <div className={styles.Icon}>
                        <a href="https://www.javascript.com">
                            <img src={JAVASCRIPT} alt="Javascript" />
                            <p>Javascript</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://developer.mozilla.org/es/docs/Web/HTML">
                            <img src={HTML} alt="HTML" />
                            <p>HTML</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://developer.mozilla.org/es/docs/Web/CSS">
                            <img src={CSS} alt="CSS" />
                            <p>CSS</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://es.reactjs.org">
                            <img src={REACT} alt="React" />
                            <p>React</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://redux.js.org">
                            <img src={REDUX} alt="Redux" />
                            <p>Redux</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://expressjs.com">
                            <img src={EXPRESS} alt="Express" />
                            <p>Express</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://www.postgresql.org">
                            <img src={POSTGRESQL} alt="PostgreSQL" />
                            <p>PostgreSQL</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://sequelize.org">
                            <img src={SEQUELIZE} alt="Sequelize" />
                            <p>Sequelize</p>
                        </a>
                    </div>
                </section>
                
                <section className={styles.SecondStack}>
                    
                </section>
            </div>
        </div>
    );
};


export default Stack;