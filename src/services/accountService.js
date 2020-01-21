import {find} from 'lodash';

import {ACCOUNTS} from '../const';
import {isEmpty} from 'lodash';

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
}
