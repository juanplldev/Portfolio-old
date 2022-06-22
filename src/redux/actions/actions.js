// Dependencies
import axios from "axios";
// Files
const URL = "http://localhost:3001";


export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_BY_NAME = "GET_VIDEOGAMES_BY_NAME";
export const GET_VIDEOGAMES_BY_ID = "GET_VIDEOGAMES_BY_ID";
export const CLEAN_DETAIL_STATE = "CLEAN_DETAIL_STATE";
export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_RATING = "SORT_BY_RATING";


export function getVideogames()
{
    return async function(dispatch)
    {
        const data = (await axios(`${URL}/videogames`)).data;
        return dispatch({type: GET_VIDEOGAMES, payload: data});
    };
};

export function getVideogamesByName(query)
{
    return async function(dispatch)
    {
        const data = (await axios(`${URL}/videogames?name=${query}`)).data;
        console.log(data);
        return dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: data});
    };
};

export function getVideogamesById(id)
{
    return async function(dispatch)
    {
        const data = (await axios(`${URL}/videogame/${id}`)).data;
        return dispatch({type: GET_VIDEOGAMES_BY_ID, payload: data});
    };
};

export function cleanDetailState()
{
    return async function(dispatch)
    {
        return await dispatch({type: CLEAN_DETAIL_STATE, payload: {}});
    };
}

export function addVideogame(values)
{
    return async function(dispatch)
    {
        const data = (await axios.post(`${URL}/videogame`, values)).data;
        return dispatch({type: ADD_VIDEOGAME, payload: data});
    };
};

export function getGenres()
{
    return async function(dispatch)
    {
        const data = (await axios(`${URL}/genres`)).data;
        return dispatch({type: GET_GENRES, payload: data});
    };
};

export function getPlatforms()
{
    return async function(dispatch)
    {
        const data = (await axios(`${URL}/platforms`)).data;
        return dispatch({type: GET_PLATFORMS, payload: data});
    };
};

export function filterByGenre(value)
{
    return async function(dispatch)
    {
        return await dispatch({type: FILTER_BY_GENRE, payload: value});
    };
};

export function filterByCreated(value)
{
    return async function(dispatch)
    {
        return await dispatch({type: FILTER_BY_CREATED, payload: value});
    };
};

export function sortByName(value)
{
    return async function(dispatch)
    {
        return await dispatch({type: SORT_BY_NAME, payload: value});
    };
};

export function sortByRating(value)
{
    return async function(dispatch)
    {
        return await dispatch({type: SORT_BY_RATING, payload: value});
    };
};