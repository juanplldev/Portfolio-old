// Dependencies
import React from "react";
import {useDispatch} from "react-redux";
// Files
import {filterByCreated} from "../../redux/actions/actions";
import styles from "./FilterByCreated.module.css";


function FilterByCreated({setCurrentPage})
{
    const dispatch = useDispatch();

    function handleFilterByCreated(e)
    {
        dispatch(filterByCreated(e.target.value));
        setCurrentPage(1);
    };

    return(
        <div className={styles.FilterByCreated}>
            <h3>Filter by created or existent</h3>
            <select onChange={e => handleFilterByCreated(e)} className={styles.SelectFilter}>
                <option className={styles.OptionFilter} value="All" >All</option>
                <option className={styles.OptionFilter} value="Created" >Created</option>
                <option className={styles.OptionFilter} value="Existent" >Existent</option>
            </select>
        </div>
    );
};


export default FilterByCreated;