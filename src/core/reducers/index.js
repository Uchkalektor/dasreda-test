const initialState = {
  isLoading: true,
  repos: [],
  error: null,
  licenseFilter: '',
  searchField: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REPOS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_REPOS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        repos: action.payload,
      };
    case 'FETCH_REPOS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'SET_SEARCH_FIELD':
      return {
        ...state,
        searchField: action.payload,
      };
    case 'SET_LICENSE_FILTER':
      return {
        ...state,
        licenseFilter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
