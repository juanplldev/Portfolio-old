// Dependencies
import React, {useState} from "react";
import {useDispatch} from "react-redux";
// Files
import {getVideogamesByName} from "../../redux/actions/actions";
import styles from "./SearchBar.module.css";


function SearchBar()
{
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e)
    {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSumbit(e)
    {
        e.preventDefault();
        dispatch(getVideogamesByName(name));
    };

    return(
        <div className={styles.SearchBar}>
            <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            
            <input onChange={e => handleInputChange(e)} type="search" placeholder="Search game" className={styles.SearchInput} />
            <button onClick={e => handleSumbit(e)} type="submit" className={styles.SearchButton} ><span className="material-symbols-outlined">search</span></button>
        </div>
    );
};


export default SearchBar;