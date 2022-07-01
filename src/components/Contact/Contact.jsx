// Dependencies
import React, {useState} from "react";
// Files
import MailModal from "../MailModal/MailModal.jsx";
import LINKEDIN from "../../img/LinkedInRound.png";
import GITHUB from "../../img/GitHub.png";
import MAIL from "../../img/MailRound.png";
import styles from "./Contact.module.css";


function Contact()
{
    const [modal, setModal] = useState(false);
    
    function handleModal(e)
    {
        e.preventDefault();
        setModal(!modal);
        console.log(modal);
    };
    
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
                
                <div className={styles.Icon}>
                    <a href="https://github.com/JuanPablo-Llorente">
                        <img src={GITHUB} alt="GitHub" />
                    </a>
                </div>
                
                <div className={styles.MailIcon}>
                    <a href="mailto:juanpablollorentej@gmail.com">
                        <img src={MAIL} alt="E-mail" />
                    </a>
                    <span></span>
                </div>
                
                {/* {
                    modal === true && <MailModal Close={handleModal}/>
                } */}
            </div>
            



            
            <div className={styles.ContactContainer}>
                <form action="">
                    
                </form>
            </div>
        </div>
    );
};


export default Contact;