const axios = require('axios'),
    querystring = require('querystring');

const BASE_API = "http://localhost:3001/api";
const BASE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoidGstbWwtdGFtbXkiLCJpYXQiOjE1MDIzODEzNzYsImV4cCI6MTUxNTM0MTM3Nn0.Q4AuktB26fHZSK5sE0dAq3UtrmwZAIAhaQXAQGMb9r8";

const instance = axios.create({
    baseURL: BASE_API,
    headers: {'x-access-token': BASE_TOKEN}
});

export default class ProductService {
    static getProductsByQuery(query) {
        return instance.get(`${BASE_API}/items?q=${query}`);
    };

    static getProductById(id) {
        return instance.get(`${BASE_API}/items/${id}`);
    };
}