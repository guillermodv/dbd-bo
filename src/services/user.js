import StaticDataService from "./staticData";

const SESSION = 'session';

export default class UserService {

    static getSession() {
        return JSON.parse(localStorage.getItem(SESSION));
    }

    static setSession(user) {
        localStorage.setItem(SESSION, JSON.stringify(user));
    }

    static removeUser() {
        return localStorage.removeItem(SESSION);
    }

    static async validateSession(queryParams) {
        try {
            if (queryParams) {
                const {email, password} = queryParams;
                const user = StaticDataService.fetch();
                const success = email === user.email && password === user.password;
                if (success) {
                    UserService.setSession(user);
                }
            }
        } catch (err) {
            window.location = '/';
        }
    }
}
