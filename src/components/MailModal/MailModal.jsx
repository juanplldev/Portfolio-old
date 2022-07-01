// Dependencies
import React, {useState} from "react";
// Files
import styles from "./MailModal.module.css";

function MailModal({Close})
{
    return(
        <div className={styles.Container}>
            <h1>Hello, World!</h1>
            <button onClick={Close}>Close</button>
        </div>
    )
};


export default MailModal;