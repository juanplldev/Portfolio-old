// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import CloseButtonWhite from "../../img/CloseButtonWhite.png"
import CloseButtonDark from "../../img/CloseButton.png"
import darkStyles from "./DarkMailModal.module.css";
import lightStyles from "./LightMailModal.module.css";


function MailModal({modalState, handleModalState})
{
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
    
    if(modalState === true)
    {
        return(
            <div className={styles.Background}>
                <div className={styles.Container}>
                    <div className={styles.Header}>
                        <h1>Send me an email</h1>
                        <button onClick={handleModalState}><img src={theme === "Dark" ? CloseButtonWhite : CloseButtonDark} alt="X" /></button>
                    </div>
                    
                    <div className={styles.Content}>
                        <form action="https://formsubmit.co/juanpablollorentej@gmail.com" method="POST" className={styles.MailForm}>
                            <div className={styles.TopInputs}>
                                <input name="name" type="text" placeholder="Name" required/>
                                <input name="email" type="email" placeholder="Email" required/>
                            </div>
                            
                            <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
                            <button type="submit"></button>
                        </form>
                    </div>
                    
                    <div className={styles.Footer}>
                        <a href="mailto:juanpablollorentej@gmail.com">juanpablollorentej@gmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        return null;
    };
};


export default MailModal;