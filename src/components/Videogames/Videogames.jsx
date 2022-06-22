// Dependencies
import React from "react";
// Files
import styles from "./Videogames.module.css";


function Videogames({image, name, Genres})
{
    function handleGenres(genre)
    {
        return Array.isArray(genre) ? genre.map(e => e.name).join(", ") : genre;
    };

    return(
        <div className={styles.Videogame}>
            <h2>{name}</h2>
            <img src={image} alt={name} width="300px" height="200px" loading="lazy" />
            <h4>{handleGenres(Genres)}</h4>
        </div>
    );
};


export default Videogames;