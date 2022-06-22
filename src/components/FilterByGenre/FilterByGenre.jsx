// Dependencies
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// Files
import {filterByGenre, getGenres} from "../../redux/actions/actions";
import styles from "./FilterByGenre.module.css";


function FilterByGenre({setCurrentPage})
{
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {dispatch(getGenres())}, [dispatch]);

    function handleFilterGenre(e)
    {
        dispatch(filterByGenre(e.target.value));
        setCurrentPage(1);
    };

    return(
        <div className={styles.FilterByGenre}>
            <h3>Filter by genre</h3>
            <select onChange={e => handleFilterGenre(e)} className={styles.SelectFilter}>
                <option className={styles.OptionFilter} value="All" >All</option>
                {
                    genres.map(genre => (
                        <option className={styles.OptionFilter} value={genre} key={genre}>{genre}</option>
                    ))
                };
            </select>
        </div>
    );
};


export default FilterByGenre;