export const ACCOUNTS_REQUESTED = 'ACCOUNTS_REQUESTED';
export const ACCOUNTS_SUCCEEDED = 'ACCOUNTS_SUCCEEDED';

export const requestAccounts = () => ({type: ACCOUNTS_REQUESTED});
export const receiveAccounts = accounts => ({type: ACCOUNTS_SUCCEEDED, accounts});

export const ACCOUNT_REQUESTED = 'ACCOUNT_REQUESTED';
export const ACCOUNT_SUCCEEDED = 'ACCOUNT_SUCCEEDED';

export const requestAccount = id => ({type: ACCOUNT_REQUESTED, id});
export const receiveAccount = account => ({type: ACCOUNT_SUCCEEDED, account});
