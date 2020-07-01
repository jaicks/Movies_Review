import {SEARCH_MOVIE, FETCH_MOVIES} from './types';
import {APIKey} from '../APIKey';
import axios from 'axios';


export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => dispatch =>{ 
    console.log("dfhgds")
   axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
   .then(response => {
       dispatch({
       type: FETCH_MOVIES,
       payload: response.data.Search

   })
//    .catch(err => console.log(err))
   console.log("response")
})
}