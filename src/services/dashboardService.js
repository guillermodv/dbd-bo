import http from './http';

const ENDPOINT = "http://localhost:3001/";

export default class DashboardService {

    static async fetchAll() {
        const {response} = await http.get(`${ENDPOINT}dashboard`);
        return response;
    }

    static async get(id){
        const {response} = await http.get(`${ENDPOINT}dashboard/${id}`);
        return response;
    }
}
