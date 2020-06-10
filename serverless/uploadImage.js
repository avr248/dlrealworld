"use strict";

const fetch = require("cross-fetch");
const btoa = require("btoa");

module.exports.handler = (event, context, callback) => {
    fechProducts().then(response => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(response)
        })
    });
};

fechProducts() {
    let authString = `${'55125c3145ee6ad6144525a9ed300f1f'}:${'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'}`;
    return new Promise(function(resolve, reject){
        fetch('https://avr248.myshopify.com/admin/api/2020-04/products.json', {
            method: "GET",
            mode: "no-cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Cache-Control": "no-cache",
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(authString)
            },
            redirect: "follow",
            referrer: "no-referrer",
        }).then(response => resolve(response.json()))
    })
}