// Dependencies
import React from "react";
// Files
import JAVASCRIPT from "../../img/JavascriptWhite.png";
import HTML from "../../img/HTMLWhite.png";
import CSS from "../../img/CSSWhite.png";
import REACT from "../../img/ReactWhite.png";
import REDUX from "../../img/ReduxWhite.png";
import NODE from "../../img/NodeWhite.png";
import EXPRESS from "../../img/ExpressWhite.png";
import POSTGRESQL from "../../img/PostgreSQLWhite.png";
import SEQUELIZE from "../../img/SequelizeWhite.png";
import POSTMAN from "../../img/PostmanWhite.png";
import GIT from "../../img/GitWhite.png";
import HEROKU from "../../img/HerokuWhite.png";
import VERCEL from "../../img/VercelWhite.png";
import JWT from "../../img/JWTWhite.png";
import GOOGLE from "../../img/GoogleWhite.png";
import VISUAL from "../../img/VisualStudioCodeWhite.png";
import PHOTOSHOP from "../../img/PhotoshopWhite.png";
import GITHUB from "../../img/GitHubWhite.png";
import SLACK from "../../img/SlackWhite.png";
import TRELLO from "../../img/TrelloWhite.png";
import styles from "./Stack.module.css";


function Stack()
{
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>Stack</h1>
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