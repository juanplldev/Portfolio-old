// Dependencies
import React from "react";
// Files
import CloseButton from "../../img/CloseButton.png"
import styles from "./MailModal.module.css";

function MailModal({modalState, setModalState, handleModalState})
{
    function handleModalState(e)
    {
        e.preventDefault();
        setModalState(!modalState);
    };
    
    if(modalState === true)
    {
        return(
            <div className={styles.Background}>
                <div className={styles.Container}>
                    <div className={styles.Header}>
                        <h1>Send me an email</h1>
                        <button onClick={handleModalState}><img src={CloseButton} alt="X" /></button>
                    </div>
                    
                    <div className={styles.Content}>
                        <form action="" method="POST" className={styles.MailForm}>
                            <div className={styles.TopInputs}>
                                <input name="name" type="text" placeholder="Name" required/>
                                <input name="email" type="email" placeholder="Email" required/>
                            </div>
                            
                            <textarea name="message" cols="30" rows="10"  placeholder="Message"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    
                    <div className={styles.Footer}>
                        <h3>juanpablollorentej@gmail.com</h3>
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