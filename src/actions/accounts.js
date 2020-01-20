export const ACCOUNTS_REQUESTED = 'ACCOUNTS_REQUESTED';
export const ACCOUNTS_SUCCEEDED = 'ACCOUNTS_SUCCEEDED';

export const requestAccounts = () => ({type: ACCOUNTS_REQUESTED});
export const receiveAccounts = accounts => ({type: ACCOUNTS_SUCCEEDED, accounts});

export const ACCOUNT_REQUESTED = 'ACCOUNT_REQUESTED';
export const ACCOUNT_SUCCEEDED = 'ACCOUNT_SUCCEEDED';

export const requestAccount = id => ({type: ACCOUNT_REQUESTED, id});
export const receiveAccount = account => ({type: ACCOUNT_SUCCEEDED, account});

export const ACCOUNT_SAVE_REQUESTED = 'ACCOUNT_SAVE_REQUESTED';
export const ACCOUNT_SAVE_SUCCEEDED = 'ACCOUNT_SAVE_SUCCEEDED';
export const ACCOUNT_SAVE_FAILED = 'ACCOUNT_SAVE_FAILED';

export const requestSaveAccount = account => ({type: ACCOUNT_SAVE_REQUESTED, account});
export const notifySaveAccountSucceeded = () => ({type: ACCOUNT_SAVE_SUCCEEDED});
export const notifySaveAccountFailed = () => ({type: ACCOUNT_SAVE_FAILED});

export const ACCOUNT_REMOVE_REQUESTED = 'ACCOUNT_REMOVE_REQUESTED';
export const ACCOUNT_REMOVE_SUCCEEDED = 'ACCOUNT_REMOVE_SUCCEEDED';
export const ACCOUNT_REMOVE_FAILED = 'ACCOUNT_REMOVE_FAILED';

export const requestRemoveAccount = id => ({type: ACCOUNT_REMOVE_REQUESTED, id});
export const notifyRemoveAccountSucceeded = () => ({type: ACCOUNT_REMOVE_SUCCEEDED});
export const notifyRemoveAccountFailed = () => ({type: ACCOUNT_REMOVE_FAILED});
