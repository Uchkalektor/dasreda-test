const fetchReposRequest = () => ({
  type: 'FETCH_REPOS_REQUEST',
});

const fetchReposSuccess = (repos) => ({
  type: 'FETCH_REPOS_SUCCESS',
  payload: repos,
});

const fetchReposFailure = (error) => ({
  type: 'FETCH_REPOS_FAILURE',
  payload: error,
});

const setSearchField = (text) => ({
  type: 'SET_SEARCH_FIELD',
  payload: text,
});

const setLicenseFilter = (license) => ({
  type: 'SET_LICENSE_FILTER',
  payload: license,
});

export {
  fetchReposRequest,
  fetchReposSuccess,
  fetchReposFailure,
  setSearchField,
  setLicenseFilter,
};
