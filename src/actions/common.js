export const VERSION_FETCH_SUCCEEDED = 'VERSION_FETCH_SUCCEEDED';
export const receiveVersion = (version, date) => ({type: VERSION_FETCH_SUCCEEDED, version, date});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({type: CLEAR_ERROR});

export const ERROR_OCCURRED = 'ERROR_OCCURRED';
export const handleError = err => ({type: ERROR_OCCURRED, err});