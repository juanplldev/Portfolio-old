// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import darkStyles from "./DarkMenuModal.module.css";
import lightStyles from "./LightMenuModal.module.css";


function MenuModal({modalState})
{
    const {theme, setTheme} = useContext(ThemeContext);
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
    
    function handleChangeTheme()
    {
        if(theme === "Dark")
        {
            setTheme("Light");
            window.localStorage.setItem("Theme", "Light");
        }
        else if(theme === "Light")
        {
            setTheme("Dark");
            window.localStorage.setItem("Theme", "Dark");
        };
    };
    
    if(modalState === true)
    {
        return(
            <div className={styles.Background}>
                <div className={styles.Container}>
                    <div className={styles.ButtonContainer}>
                        <button>Language</button>
                    </div>
                    
                    <div className={styles.SwitcherContainer}>
                        {
                            styles.LightProperty ?
                            <input checked type="checkbox" id={styles.Switcher}/>
                            :
                            <input type="checkbox" id={styles.Switcher}/>
                        }
                        <label onClick={handleChangeTheme} htmlFor={styles.Switcher} className={styles.SwitchLabel}>
                            {/* <label htmlFor={styles.SwitchLabel} className={styles.SwitchLabelIcon}></label> */}
                        </label>
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


export default MenuModal;