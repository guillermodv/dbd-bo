export const VALIDATE_SESSION = 'VALIDATE_SESSION';
export const SESSION_REQUESTED = 'SESSION_REQUESTED';
export const SESSION_RECEIVED = 'SESSION_RECEIVED';
export const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN';

export const requestValidateSession = queryParams => ({type: VALIDATE_SESSION, queryParams});
export const requestFetchSession = () => ({type: SESSION_REQUESTED});
export const receiveSession = profile => ({type: SESSION_RECEIVED, profile});
export const setErrorLogin = status => ({type: SET_ERROR_LOGIN, status});