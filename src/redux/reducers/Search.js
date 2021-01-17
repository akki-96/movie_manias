const initialState = {
    searchKeyword: null,
    searchSuggestion: null,
    searchResults: null,

    isLoadingSearchSuggestion: false,
    isLoadingSearchResults: false
}

const Search = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "UPDATE_SEARCH_KEYWORD":
            return {...state, searchKeyword: payload}    
        case "GET_SEARCH_SUGGESTION":
            return {...state, searchSuggestion: payload}
        case "GET_SEARCH_RESULTS":
            return {...state, searchResults: payload}
        
        case "TOGGLE_IS_LOADING_SEARCH_SUGGESTION":
            return {...state, isLoadingSearchResults: !state.isLoadingSearchResults}
        case "TOGGLE_IS_LOADING_SEARCH_RESULTS":
            return {...state, isLoadingSearchSuggestion: !state.isLoadingSearchSuggestion}
        
        default:
            return state;
    }   
}

export default Search