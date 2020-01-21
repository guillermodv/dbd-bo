export default class Http {
    /**
     * Send a GET request to the given URL.
     * @param {String} url a URL where the request is send.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async get(url) {
        const response = await fetch(url, {headers: {'Content-Type': 'application/json'}});
        console.log('response-->', response);
        return response.json();
    }

    /**
     * Send a POST request to the given URL.
     * @param {string} url a URL where the request is send.
     * @param {any} body data to be included in the request body.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async post(url, body) {
        const response = await fetch(url, {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                authorization: "Basic"
            }
        });
        return response.json();
    }
}
