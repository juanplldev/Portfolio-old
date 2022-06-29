// Dependencies
import React from "react";
// Files
import JAVASCRIPT from "../../img/Javascript.png";
import HTML from "../../img/HTML.png";
import CSS from "../../img/CSS.png";
import REACT from "../../img/React.png";
import REDUX from "../../img/Redux.png";
import NODE from "../../img/Node.png";
import EXPRESS from "../../img/Express.png";
import POSTGRESQL from "../../img/PostgreSQL.png";
import SEQUELIZE from "../../img/Sequelize.png";
import POSTMAN from "../../img/Postman.png";
import GIT from "../../img/Git.png";
import HEROKU from "../../img/Heroku.png";
import VERCEL from "../../img/Vercel.png";
import JWT from "../../img/JWT.png";
import GOOGLE from "../../img/Google.png";
import VISUAL from "../../img/VisualStudioCode.png";
import PHOTOSHOP from "../../img/Photoshop.png";
import GITHUB from "../../img/GitHub.png";
import SLACK from "../../img/Slack.png";
import TRELLO from "../../img/Trello.png";
import styles from "./Stack.module.css";


function Stack()
{
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>My tack</h1>
            </div>
            
            <div className={styles.StackContainer}>
                <section className={styles.Stack}>
                    <div className={styles.Icon}>
                        <a href="https://www.javascript.com">
                            <img src={JAVASCRIPT} alt="Javascript" />
                            <p>JavaScript</p>
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
                        <a href="https://nodejs.org">
                            <img src={NODE} alt="Node" />
                            <p>Node</p>
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
                    
                    <div className={styles.Icon}>
                        <a href="https://www.postman.com">
                            <img src={POSTMAN} alt="Postman" />
                            <p>Postman</p>
                        </a>
                    </div>
                </section>
                
                <section className={styles.Stack}>
                    <div className={styles.Icon}>
                        <a href="https://git-scm.com">
                            <img src={GIT} alt="Git" />
                            <p>Git</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://heroku.com">
                            <img src={HEROKU} alt="Heroku" />
                            <p>Heroku</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://vercel.com">
                            <img src={VERCEL} alt="Vercel" />
                            <p>Vercel</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://jwt.io">
                            <img src={JWT} alt="Json Web Tokens" />
                            <p>Json Web Tokens</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://cloud.google.com/apis">
                            <img src={GOOGLE} alt="Google API" />
                            <p>Google API</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://code.visualstudio.com">
                            <img src={VISUAL} alt="Visual Studio Code" />
                            <p>Visual Studio Code</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://www.adobe.com/ar/products/photoshop.html">
                            <img src={PHOTOSHOP} alt="Photoshop" />
                            <p>Photoshop</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://github.com">
                            <img src={GITHUB} alt="GitHub" />
                            <p>GitHub</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://slack.com">
                            <img src={SLACK} alt="Slack" />
                            <p>Slack</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://trello.com">
                            <img src={TRELLO} alt="Trello" />
                            <p>Trello</p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Stack;