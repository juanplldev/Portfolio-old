// Dependencies
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
// Files
import {addVideogame, getGenres, getPlatforms, getVideogames} from "../../redux/actions/actions";
import Loading from "../Loading/Loading.jsx";
import styles from "./VideogameCreate.module.css";


function VideogameCreate()
{
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const videogames = useSelector(state => state.videogames);
    
    const [errors, setErrors] = useState({});
    
    const [input, setInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        genres: [],
        platforms: [],
        image: "",
    });
    const navigate = useNavigate();
    
    useEffect(() => {dispatch(getGenres())}, [dispatch]);
    useEffect(() => {dispatch(getPlatforms())}, [dispatch]);
    useEffect(() => {dispatch(getVideogames())}, [dispatch]);
    
    function validate(input)
    {
        const errors = {};
        const foundVideogame = videogames.filter(e => e.name === input.name);
        // console.log(foundVideogame);
        // console.log(errors);
        
        if(!input.name)
        {
            errors.name = <font color="red">*</font>;
        }
        else if(foundVideogame.length)
        {
            errors.name = <p className={styles.Alert}>Sorry! The videogame name already exists.</p>;
        }
        else if(!input.description)
        {
            errors.description = <font color="red">*</font>;
        }
        else if(!input.releaseDate)
        {
            errors.releaseDate = <font color="red">*</font>;
        }
        else if(!input.rating)
        {
            errors.rating = <font color="red">*</font>;
        }
        else if(input.rating < 1 || input.rating > 5)
        {
            errors.rating = alert("The rating range is from 1 to 5");
        }
        else if(input.genres.length === 0)
        {
            errors.genres = <font color="red">*</font>;
        }
        else if(input.platforms.length === 0)
        {
            errors.platforms = <font color="red">*</font>;
        }
        else if(input.genres.length > 4)
        {
            errors.platforms = alert("Maximum four genres.");
        }
        else if(input.platforms.length > 4)
        {
            errors.platforms = alert("Maximum four platforms.");
        }
        else if(!input.image)
        {
            errors.image = <font color="red">*</font>;
        }
        
        return errors;
    };
    
    function handleChange(e)
    {
        setInput({...input, [e.target.name] : e.target.value});
        setErrors(validate({...input, [e.target.name] : e.target.value}));
        // console.log(input);
    };
    
    function handleSelectGenres(e)
    {
        const genre = e.target.value;
        setInput({...input, genres: input.genres.includes(genre) ? [...input.genres] : [...input.genres, e.target.value]});
        setErrors(validate({...input, genres: [...input.genres, e.target.value]}));
        // console.log(input.genres);
    };
    
    function handleSelectPlatforms(e)
    {
        const platform = e.target.value;
        setInput({...input, platforms: input.platforms.includes(platform) ? [...input.platforms] : [...input.platforms, e.target.value]});
        setErrors(validate({...input, platforms: [...input.platforms, e.target.value]}));
        // console.log(input.platforms);
    };
    
    function handleDeleteSelectedGenre(e)
    {
        setInput({...input, genres: input.genres.filter(g => g !== e)});
    };
    
    function handleDeleteSelectedPlatform(e)
    {
        setInput({...input, platforms: input.platforms.filter(p => p !== e)});
    };
    
    function handleSubmit(e)
    {
        if(Object.keys(validate(input)).length > 0)
        {
            e.preventDefault();
            alert("All fields are required.");
        }
        else
        {
            e.preventDefault();
            dispatch(addVideogame(input));
            setInput({
                name: "",
                description: "",
                releaseDate: "",
                rating: "",
                genres: [],
                platforms: [],
                image: "",
            });
            alert("The videogame was successfully created!");
            navigate("/home");
        };
    };
    
    
    if(genres.length && platforms.length && videogames.length)
    {
        return(
            <div className={styles.Background}>
                
                <div className={styles.VideogameCreate}>
                    
                    <h1>Create your own videogame!</h1>
                    
                    <form className={styles.FormCreate} onSubmit={e => handleSubmit(e)} >
                        
                        <input onChange={e => handleChange(e)} type="text" placeholder="Name" value={input.name} name="name" />
                        {
                            errors.name && errors.name
                        }
                        
                        <input onChange={e => handleChange(e)} type="text" placeholder="Description" value={input.description} name="description" />
                        {
                            errors.description && errors.description
                        }
                        
                        <input onChange={e => handleChange(e)} type="text" placeholder="Release date" value={input.releaseDate} name="releaseDate" onFocus={e => e.currentTarget.type = "date"} onBlur={e => e.currentTarget.type = "text"} />
                        {
                            errors.releaseDate && errors.releaseDate
                        }
                        
                        <input onChange={e => handleChange(e)} type="number" placeholder="Rating: 1-5" value={input.rating} name="rating" />
                        {
                            errors.rating && errors.rating
                        }
                        
                        <input onChange={e => handleChange(e)} type="text" placeholder="Image URL" value={input.image} name="image" />
                        {
                            errors.image && errors.image
                        }
                        
                        <div>
                            <select onChange={e => handleSelectGenres(e)} name="genres" >
                                <option hidden >Select genres Max 4</option>
                                {
                                    genres.map(genre => (
                                        <option value={genre} key={genre}>{genre}</option>
                                    ))
                                }
                            </select>
                            {
                                errors.genres && errors.genres
                            }
                            <ul>
                                <li>
                                    {
                                        input.genres.map(e => (
                                            <div className={styles.CloseButton}>
                                                {e}<input type="button" value="X" onClick={() => handleDeleteSelectedGenre(e)} />
                                            </div>
                                        ))
                                    }
                                </li>
                            </ul>
                        </div>
                                
                        <div>
                            <select onChange={e => handleSelectPlatforms(e)} name="platforms" >
                                <option hidden >Select platforms Max 4</option>
                                {
                                    platforms.map(platform => (
                                        <option value={platform} key={platform}>{platform}</option>
                                    ))
                                };
                            {
                                errors.platforms && errors.platforms
                            }
                            </select>
                            <ul>
                                <li>
                                {
                                    input.platforms.map(e => (
                                        <div className={styles.CloseButton}>
                                            {e}<input type="button" value="X" onClick={() => handleDeleteSelectedPlatform(e)} />
                                        </div>
                                    ))
                                }
                                </li>
                            </ul>
                        </div>
                            
                        <button className={styles.SubmitButton} type="submit">Create</button>
                    </form>
                </div>
            </div>
        );
    }
    else
    {
        return (<Loading/>);
    };
};


export default VideogameCreate;