// Dependencies
import React, {useState} from "react";
// Files
import MailModal from "../MailModal/MailModal.jsx";
import LINKEDIN from "../../img/LinkedInRoundWhite.png";
import GITHUB from "../../img/GitHubWhite.png";
import MAIL from "../../img/MailRoundWhite.png";
import styles from "./Contact.module.css";


function Contact()
{
    const [modalState, setModalState] = useState(false);
    const width = window.innerWidth;
    
    function handleModalState()
    {
        setModalState(!modalState);
    };
    
    window.addEventListener("keyup", key => {
        if(key.key === "Escape")
        {
            if(modalState === true)
            {
                setModalState(false);
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    });
    
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>Contact</h1>
            </div>
            
            <div className={styles.IconsContainer}>
                <div className={styles.Icon}>
                    <a href="https://www.linkedin.com/in/juan-pablo-llorente/">
                        <img src={LINKEDIN} alt="LinkedIn" />
                    </a>
                </div>
                
                <div className={styles.MailIcon}>
                    <img src={MAIL} alt="E-mail" onMouseEnter={width > 768 ? handleModalState : null} onClick={width <= 768 ? handleModalState : null}/>
                    <span></span>
                </div>
                
                <div className={styles.Icon}>
                    <a href="https://github.com/JuanPablo-Llorente">
                        <img src={GITHUB} alt="GitHub" />
                    </a>
                </div>
                
                <MailModal
                    modalState={modalState}
                    handleModalState={handleModalState}
                />
            </div>
        </div>
    );
};


export default Contact;