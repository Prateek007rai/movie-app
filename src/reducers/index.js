import { combineReducers } from 'redux';
import { ADD_MOVIES,
     ADD_TO_FAVOURITES , 
     REMOVE_FROM_FAVOURITES ,
     SET_SHOW_FAVOURITES } 
     from '../actions'


//store structure or model     
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

const initialSearchState ={
    result: {}
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}


export function movies (state = initialMoviesState , action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state ,                                           //this line will form a new object with this new list array value
    //         list: action.movies
    //     };
    // }

    // return state;

    switch(action.type){
        case ADD_MOVIES :   return {
                                    ...state ,                                          
                                    list: action.movies
                            };

        case ADD_TO_FAVOURITES:  return {
                                    ...state ,                                          
                                    favourites: [action.movie , ...state.favourites]                          //action.movie is the current moviwe that can be add in fav list
                                };                      
        
        case REMOVE_FROM_FAVOURITES: const filteredArray = state.favourites.filter(movie => 
                                            movie.Title !== action.movie.Title);
                                    return {
                                    ...state,
                                    favourites: filteredArray
                                    };   


        case SET_SHOW_FAVOURITES: return {
                                    ...state,
                                    showFavourites: action.val
                                  };                                     


        default: return state;                         
    }
}


//search reducer
export function search (state = initialSearchState , action){
    return state;
}


//Root reducer
// export default function rootReducer (state = initialRootState , action){
//     return {
//         movies: movies(state.movies,action),                                                  //user: userReducer(state.value, action);
//         search: search(state.search,action)
//     };
// }


export default combineReducers({                                //this combineReducers method provide by redux so we dont need of rootreducers
    movies: movies,
    search: search
})