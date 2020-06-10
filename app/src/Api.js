import React from 'react';
import fetch from 'node-fetch';

export default class RestClient {
    constructor({ baseUrl, token }) {
        this.baseUrl = 'https://crj9h4tld6.execute-api.eu-west-1.amazonaws.com/dev/';
    }
    post(action) {
        return new Promise(function(resolve, reject){
            fetch(this.baseUrl+action, {
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
export default RestClient;
