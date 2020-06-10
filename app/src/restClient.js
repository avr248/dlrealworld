import React from 'react';
import fetch from 'node-fetch';

export default class RestClient {
    constructor({ baseUrl }) {
        this.baseUrl = baseUrl;
    }
    getProducts() {
        let baseUrl = this.baseUrl;
        return new Promise(function(resolve, reject){
            fetch(baseUrl+'upload', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "omit",
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: "follow",
                referrer: "no-referrer",
            })
            .then(response => resolve(response.json()))
        })
    }
}
