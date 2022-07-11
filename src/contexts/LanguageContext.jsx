// Dependencies
import React, {useState} from "react";

const Context = React.createContext({});

export function LanguageContext({children})
{
    const localLanguage = window.localStorage.getItem("Language") ? window.localStorage.getItem("Language") : "English";
    const [language, setLanguage] = useState(localLanguage);
    
    return(
        <Context.Provider value={{language, setLanguage}}>
            {children}
        </Context.Provider>
    );
};


export default Context;