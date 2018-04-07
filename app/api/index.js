var request = require('request');
var UserModel = require('../models/user');

const api = {
    coinmarketcapReq: (limit, cb) => {
        const url = limit ? `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}` : 'https://api.coinmarketcap.com/v1/ticker/?limit=0'
        request(url, (err, res, body) => {
            cb(err, res, JSON.parse(body));
        })
    },
    coinmarketcapReqWithStart: (start, cb) => {
        const url = start ? `https://api.coinmarketcap.com/v1/ticker/?start=${start}` : `https://api.coinmarketcap.com/v1/ticker/`
        request(url, (err, res, body) => {
            cb(err, res, JSON.parse(body));
        })
    },
}

module.exports = api;
