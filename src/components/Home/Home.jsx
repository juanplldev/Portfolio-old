// Dependencies
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// Files
import {getVideogames, sortByName, sortByRating} from "../../redux/actions/actions.js";
import Videogames from "../Videogames/Videogames.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import FilterByGenre from "../FilterByGenre/FilterByGenre.jsx";
import FilterByCreated from "../FilterByCreated/FilterByCreated.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Loading from "../Loading/Loading.jsx";
import styles from "./Home.module.css";


function Home()
{
    const dispatch = useDispatch(); // Declaro una constante con la función que retorna el dispatch con sus acciones
    const allVideogames = useSelector(state => state.videogames); // Con el hook me traigo el estado de videogames
    
    const [currentPage, setCurrentPage] = useState(1); // Declaro la página actual y cual va a ser la página actual (1)
    const [videogamesPerPage, /*setVideogamesPerPage*/] = useState(15); // Declaro cuántos juegos quiero por página
    const indexOfLastVideogame = currentPage * videogamesPerPage; // Sobre la página actual multiplico la cantidad de juegos por página. Ej: 2 * 15 = 30 -> este es el último juego de la página dos
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; // Sobre la página actual resto el índice del ultimo perro para obtener el primero. Ej: 30 - 15  = 15 -> este es el primer perro de la página dos
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame); // Corto el array de juegos entre los índices marcados para mostrar tales en cada página
    const [/*order*/, setOrder] = useState("");
    
    const paginated = pageNumber => {
        setCurrentPage(pageNumber) // Setea la página en el número que apriete
        window.scrollTo(0, 350)
    };
    
    useEffect(() => {dispatch(getVideogames())}, [dispatch]); // componentDidMount
    
    
    function handleSortByName(e)
    {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Sorted ${e.target.value}`);
    };
    
    function handleSortByRating(e)
    {
        e.preventDefault();
        dispatch(sortByRating(e.target.value));
        setCurrentPage(1);
        setOrder(`Sorted ${e.target.value}`);
    };
    
    if(currentVideogames.length)
    {
        return(
            <div className={styles.Home}>
                
                <div className={styles.Title}>
                    <h1>PI-VideoGames</h1>
                    
                    <div className={styles.Create}>
                        <Link to="/videogame/create">Create a videogame</Link>
                    </div>
                    
                    <div className={styles.About}>
                        <Link to="/about">About</Link>
                    </div>
                </div>
                
                <br />
                
                <SearchBar/>
                
                <div className={styles.FiltersAndSortsers}>
                <div className={styles.Filters}>
                    <FilterByGenre
                        setCurrentPage={setCurrentPage}
                    />
                    
                    <FilterByCreated
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                    
                <div className={styles.Sortsers}>
                    <div className={styles.SortByName}>
                        <h3>Sort by name</h3>
                        <select className={styles.SelectFilter} onChange={e => handleSortByName(e)} >
                            <option className={styles.OptionFilter} value="Ascending" >Ascending</option>
                            <option className={styles.OptionFilter} value="Descending" >Descending</option>
                        </select>
                    </div>
                    
                    <div className={styles.SortByRating}>
                        <h3>Sort by rating</h3>
                        <select className={styles.SelectFilter} onChange={e => handleSortByRating(e)} >
                            <option className={styles.OptionFilter} value="-" >-</option>
                            <option className={styles.OptionFilter} value="Ascending" >Ascending</option>
                            <option className={styles.OptionFilter} value="Descending" >Descending</option>
                        </select>
                    </div>
                </div>
                </div>
                
                <Paginated
                    videogamesPerPage={videogamesPerPage}
                    allVideogames={allVideogames.length}
                    paginated={paginated}
                />
                
                <div className={styles.Cards}>
                    {
                        currentVideogames.map(vg => {
                            return(
                                <Link to={`/videogame/${vg.id}`}>
                                    <Videogames
                                        image={vg.image}
                                        name={vg.name}
                                        Genres={vg.Genres}
                                        id={vg.id}
                                        key={vg.id}
                                    />
                                </Link>
                            );
                        })
                    }
                </div>
                
                <Paginated
                    videogamesPerPage={videogamesPerPage}
                    allVideogames={allVideogames.length}
                    paginated={paginated}
                />
            </div>
        );
    }
    else
    {
        return (<Loading/>);
    };
};


export default Home;