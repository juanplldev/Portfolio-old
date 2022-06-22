// Dependencies
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getVideogamesById, cleanDetailState} from "../../redux/actions/actions";
// Files
import Loading from "../Loading/Loading.jsx";
import styles from "./VideogameDetail.module.css";

function VideogameDetail()
{
    const {id} = useParams();
    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videogameDetail);

    useEffect(() => {
        dispatch(getVideogamesById(id));
        dispatch(cleanDetailState(dispatch));
    }, [dispatch, id]);

    function handleGenres(genre)
    {
        return Array.isArray(genre) ? genre.map(e => e.name).join(", ") : genre;
    };

    if(Object.keys(videogame).length)
    {
        return(
            <div className={styles.Background}>
                
                <div className={styles.About}>
                    <h1>{videogame.name}</h1>
                    <img src={videogame.image} width="700px" alt={videogame.name}/>
                    
                    <h2>About</h2>
                    <h4>{videogame.description}</h4>
                </div>
                    
                    <br />
                    
                <div className={styles.Specs}>
                    <div className={styles.ReleaseDate}>
                        <h3>Release date</h3>
                        <h4>{videogame.releaseDate}</h4>
                    </div>
                    
                    <div className={styles.Rating}>
                        <h3>Rating</h3>
                        <h4>{videogame.rating}</h4>
                    </div>
                    
                    <div className={styles.Genres}>
                        <h3>Genres</h3>
                        <h4>{handleGenres(videogame.Genres)}</h4>
                    </div>
                    
                    <div className={styles.Platforms}>
                        <h3>Platforms</h3>
                        <h4>{videogame.platforms}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        return (<Loading/>);
    };
};


export default VideogameDetail;