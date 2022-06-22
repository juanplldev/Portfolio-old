// Dependencies
import swal from "sweetalert";
// Files
import {GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAMES_BY_ID, CLEAN_DETAIL_STATE, ADD_VIDEOGAME, GET_GENRES, GET_PLATFORMS, FILTER_BY_GENRE, FILTER_BY_CREATED, SORT_BY_NAME, SORT_BY_RATING} from "../actions/actions";

const initialSate =
{
    videogames: [],
    allVideogames: [],
    videogameDetail: {},
    genres: [],
    platforms: [],
};


function rootReducer(state = initialSate, {type, payload})
{
    switch(type)
    {
        case GET_VIDEOGAMES:
            if(payload.length)
            {
                return {...state, videogames: payload, allVideogames: payload};
            }
            else
            {
                swal("Sorry! We can not load videogames. Try again later.");
                return {...state};
            };
        
        case GET_VIDEOGAMES_BY_NAME:
            // console.log(payload);
            if(payload.length)
            {
                return {...state, videogames: payload};
            }
            else
            {
                swal("Sorry! We could not find the videogame. Check if it is well written.");
                return {...state};
            };
            
        case GET_VIDEOGAMES_BY_ID:
            return {...state, videogameDetail: payload};
        
        case CLEAN_DETAIL_STATE:
            return {...state, videogameDetail: payload};
        
        case ADD_VIDEOGAME:
            return {...state};
        
        case GET_GENRES:
            if(payload.length)
            {
                return {...state, genres: payload};
            }
            else
            {
                swal("Sorry! We can not load the genres. Try again later.");
                return {...state};
            };
            
            case GET_PLATFORMS:
                if(payload.length)
                {
                    return {...state, platforms: payload};
                }
                else
                {
                    swal("Sorry! We can not load the platforms. Try again later.");
                    return {...state};
                };
                
        case FILTER_BY_GENRE:
            const allVideogames = state.allVideogames;
            const filteredByGenre = payload === "All" ? allVideogames : allVideogames.filter(e => {
                if(typeof e.Genres === "string" && e.Genres !== null)
                {
                    return e.Genres.includes(payload);
                }
                else
                {
                    const dbGenres = e.Genres.map(el => el.name).join(", ");
                    return dbGenres.includes(payload);
                };
            });

            if(filteredByGenre.length)
            {
                return {...state, videogames: filteredByGenre};
            }
            else
            {
                swal("Sorry! No videogames found.");
                return {...state};
            };
        
        case FILTER_BY_CREATED:
            const allVideogames1 = state.allVideogames;
            const filteredByCreated = payload === "Created" ? allVideogames1.filter(e => e.createdInDb === true) : allVideogames1.filter(e => e.createdInDb === false);
            
            if(filteredByCreated.length)
            {
                return {...state, videogames: payload === "All" ? allVideogames1 : filteredByCreated};
            }
            else
            {
                swal("Sorry! No videogames found.");
                return {...state};
            };
        
        case SORT_BY_NAME:
            const sortedByName = payload === "Ascending" ? state.videogames.sort((a, b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
            })
            :
            state.videogames.sort((a, b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
            });
            return {...state, videogames: sortedByName};
        
        case SORT_BY_RATING:
            const sortByRating = payload === "Ascending" ? state.videogames.sort((a, b) => {
                if(parseInt(a.rating) > parseInt(b.rating)) return 1;
                if(parseInt(a.rating) < parseInt(b.rating)) return -1;
                return 0;
            })
            :
            state.videogames.sort((a, b) => {
                if(parseInt(a.rating) > parseInt(b.rating)) return -1;
                if(parseInt(a.rating) < parseInt(b.rating)) return 1;
                return 0;
            });
            return {...state, videogames: sortByRating};
        
        default:
            return {...state};
    };
};


export default rootReducer;