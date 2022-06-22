// Dependencies
import React from "react";
// Files
import styles from "./Paginated.module.css";


function Paginated({videogamesPerPage, allVideogames, paginated})
{
    const pageNumbers = [];

    // Divición entre los todos los juegos y los que quiero mostrar por pagina. Esto me da la cantidad de páginas.
    for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++)
    {
        pageNumbers.push(i);
    };

    return(
        <nav className={styles.Paginated}>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => {
                        return(
                            <li key={number}>
                                <button onClick={() => paginated(number)}>{number}</button>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
};


export default Paginated;