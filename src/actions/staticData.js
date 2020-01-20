export const STATIC_DATA_REQUESTED = 'STATIC_DATA_REQUESTED';
export const STATIC_DATA_SUCCEEDED = 'STATIC_DATA_SUCCEEDED';

export const requestStaticData = () => ({type: STATIC_DATA_REQUESTED});
export const receiveStaticData = profile => ({type: STATIC_DATA_SUCCEEDED, profile});
