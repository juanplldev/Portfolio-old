// Dependencies
import React, {useState} from "react";

const Context = React.createContext({});

export function WindowDimensionsContext({children})
{
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [actualHeight, setActualHeight] = useState(window.visualViewport.pageTop);
    
    // window.addEventListener("scroll", () => {
    //     setActualHeight(window.visualViewport.pageTop);
    //     setHeight(window.innerHeight);
    //     setWidth(window.innerWidth);
    // });
    
    return(
        <Context.Provider value={{height, setHeight, width, setWidth, actualHeight, setActualHeight}}>
            {children}
        </Context.Provider>
    );
};


export default Context;