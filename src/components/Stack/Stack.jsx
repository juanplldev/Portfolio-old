// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import JavascriptWhite from "../../img/JavascriptWhite.png";
import HTMLWhite from "../../img/HTMLWhite.png";
import CSSWhite from "../../img/CSSWhite.png";
import ReactWhite from "../../img/ReactWhite.png";
import ReduxWhite from "../../img/ReduxWhite.png";
import NodeWhite from "../../img/NodeWhite.png";
import ExpressWhite from "../../img/ExpressWhite.png";
import PostgreSQLWhite from "../../img/PostgreSQLWhite.png";
import SequelizeWhite from "../../img/SequelizeWhite.png";
import PostmanWhite from "../../img/PostmanWhite.png";
import GitWhite from "../../img/GitWhite.png";
import HerokuWhite from "../../img/HerokuWhite.png";
import VercelWhite from "../../img/VercelWhite.png";
import JWTWhite from "../../img/JWTWhite.png";
import ExpoWhite from "../../img/ExpoWhite.png";
import GoogleWhite from "../../img/GoogleWhite.png";
import VisualStudioCodeWhite from "../../img/VisualStudioCodeWhite.png";
import PhotoshopWhite from "../../img/PhotoshopWhite.png";
import GitHubWhite from "../../img/GitHubWhite.png";
import SlackWhite from "../../img/SlackWhite.png";
import TrelloWhite from "../../img/TrelloWhite.png";
import JavascriptBlack from "../../img/Javascript.png";
import HTMLBlack from "../../img/HTML.png";
import CSSBlack from "../../img/CSS.png";
import ReactBlack from "../../img/React.png";
import ReduxBlack from "../../img/Redux.png";
import NodeBlack from "../../img/Node.png";
import ExpressBlack from "../../img/Express.png";
import PostgreSQLBlack from "../../img/PostgreSQL.png";
import SequelizeBlack from "../../img/Sequelize.png";
import PostmanBlack from "../../img/Postman.png";
import GitBlack from "../../img/Git.png";
import HerokuBlack from "../../img/Heroku.png";
import VercelBlack from "../../img/Vercel.png";
import JWTBlack from "../../img/JWT.png";
import ExpoBlack from "../../img/Expo.png";
import GoogleBlack from "../../img/Google.png";
import VisualStudioCodeBlack from "../../img/VisualStudioCode.png";
import PhotoshopBlack from "../../img/Photoshop.png";
import GitHubBlack from "../../img/GitHub.png";
import SlackBlack from "../../img/Slack.png";
import TrelloBlack from "../../img/Trello.png";
import darkStyles from "./DarkStack.module.css";
import lightStyles from "./LightStack.module.css";


function Stack()
{
    const {language} = useContext(LanguageContext);
    
    const {theme} = useContext(ThemeContext);
    const [styles, setStyles] = useState(theme === "Dark" ? darkStyles : lightStyles);
    
    useEffect(() => {
        if(theme === "Dark")
        {
            setStyles(darkStyles);
        }
        else if(theme === "Light")
        {
            setStyles(lightStyles);
        };
    }, [theme]);
    
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>
                    {
                        language === "English" ? "Stack"
                        :
                        "Herramientas"
                    }
                </h1>
            </div>
            
            <div className={styles.StackContainer}>
                <section className={styles.Stack}>
                    <div className={styles.Icon}>
                        <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? JavascriptWhite : JavascriptBlack} alt="JavaScript" />
                            <p>JavaScript</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? HTMLWhite : HTMLBlack} alt="HTML" />
                            <p>HTML</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? CSSWhite : CSSBlack} alt="CSS" />
                            <p>CSS</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://es.reactjs.org" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? ReactWhite : ReactBlack} alt="React" />
                            <p>React</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? ReactWhite : ReactBlack} alt="React Native" />
                            <p>React Native</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? ReduxWhite : ReduxBlack} alt="Redux" />
                            <p>Redux</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? NodeWhite : NodeBlack} alt="Node" />
                            <p>Node</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? ExpressWhite : ExpressBlack} alt="Express" />
                            <p>Express</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? PostgreSQLWhite : PostgreSQLBlack} alt="PostgreSQL" />
                            <p>PostgreSQL</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://sequelize.org" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? SequelizeWhite : SequelizeBlack} alt="Sequelize" />
                            <p>Sequelize</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? PostmanWhite : PostmanBlack} alt="Postman" />
                            <p>Postman</p>
                        </a>
                    </div>
                </section>
                
                <section className={styles.Stack}>
                    <div className={styles.Icon}>
                        <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? GitWhite : GitBlack} alt="Git" />
                            <p>Git</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://heroku.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? HerokuWhite : HerokuBlack} alt="Heroku" />
                            <p>Heroku</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? VercelWhite : VercelBlack} alt="Vercel" />
                            <p>Vercel</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://jwt.io" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? JWTWhite : JWTBlack} alt="Json Web Tokens" />
                            <p>Json Web Tokens</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://expo.dev" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? ExpoWhite : ExpoBlack} alt="Expo" />
                            <p>Expo</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://cloud.google.com/apis" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? GoogleWhite : GoogleBlack} alt="Google API" />
                            <p>Google API</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? VisualStudioCodeWhite : VisualStudioCodeBlack} alt="Visual Studio Code" />
                            <p>Visual Studio Code</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://www.adobe.com/ar/products/photoshop.html" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? PhotoshopWhite : PhotoshopBlack} alt="Photoshop" />
                            <p>Photoshop</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? GitHubWhite : GitHubBlack} alt="GitHub" />
                            <p>GitHub</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? SlackWhite : SlackBlack} alt="Slack" />
                            <p>Slack</p>
                        </a>
                    </div>
                    
                    <div className={styles.Icon}>
                        <a href="https://trello.com" target="_blank" rel="noopener noreferrer">
                            <img src={theme === "Dark" ? TrelloWhite : TrelloBlack} alt="Trello" />
                            <p>Trello</p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Stack;