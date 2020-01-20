import {find} from 'lodash';

import {ACCOUNTS} from '../const';
import {isEmpty, filter} from 'lodash';

export default class AccountService {

    static getAccount(id){
        const accounts = JSON.parse(localStorage.getItem('ACCOUNTS'));
        return find(accounts, a => a._id === id);
    }

    static fetchAll() {
        let accounts =  JSON.parse(localStorage.getItem('ACCOUNTS'));
        if(isEmpty(accounts)){
            localStorage.setItem('ACCOUNTS', JSON.stringify(ACCOUNTS));
        }
        accounts =  JSON.parse(localStorage.getItem('ACCOUNTS'));
        return accounts;
    }

    static saveAccount(account) {
        let accounts =  JSON.parse(localStorage.getItem('ACCOUNTS'));
        localStorage.removeItem('ACCOUNTS');
        const _id = Math.floor(Math.random() * 100) + 1 + "";
        const service = "ClienteProveedor";
        accounts.push({...account, _id , service});
        localStorage.setItem('ACCOUNTS', JSON.stringify(accounts));

        return true;
    }

    static removeAccount(id) {
        const accounts =  JSON.parse(localStorage.getItem('ACCOUNTS'));
        localStorage.removeItem('ACCOUNTS');
        const filteredAccounts =  filter(accounts, a => a._id !== id);
        localStorage.setItem('ACCOUNTS', JSON.stringify(filteredAccounts));
        return true;
    }
}