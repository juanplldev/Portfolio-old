// Dependencies
import React, {useState} from "react";

const Context = React.createContext({});

export function ThemeContext({children})
{
    const localTheme = window.localStorage.getItem("Theme") ? window.localStorage.getItem("Theme") : "Dark";
    const [theme, setTheme] = useState(localTheme);
    
    return(
        <Context.Provider value={{theme, setTheme}}>
            {children}
        </Context.Provider>
    );
};


export default Context;