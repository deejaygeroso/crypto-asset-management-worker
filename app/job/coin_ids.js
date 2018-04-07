var _ = require('underscore')
var CryptoMainSchema = require('../models/crypto_ids');
var CryptoSchema = require('../models')
var api = require('../api');

const coin_ids = {
    fetch: () => {
            api.coinmarketcapReq(null, (err, res, cryptoList)=>{

                // if no more data stop the loop
                if(cryptoList && cryptoList.error){
                    // booleanCounter = false;
                    return null;
                }

                // create new array of objects with id of crypto
                let crypto_ids = []
                if(cryptoList.error){
                    // booleanCounter = false;
                    return null;
                }

                cryptoList.map(data =>{
                    crypto_ids.push({id: data.id, value: data.id, label: data.name})
                });

                // store all data to db
                CryptoMainSchema.collection.insert(crypto_ids, function (err, docs) {
                    if (err){
                    } else {
                        console.log('------------------------------------------------------------------------------');
                        console.log("Multiple documents saved to crypto_ids Collection. ", cryptoList && cryptoList.length, ' data stored.');
                        console.log('------------------------------------------------------------------------------');
                    }
                });
            });
    },
    fetchCryptoData: () => {
        api.coinmarketcapReq(null, (err, res, cryptoList)=>{
            CryptoSchema.collection.insert(cryptoList, function (err, docs) {
               if (err){
                   return console.error('Save to Collection failed: ', err);
               } else {
                   console.log('------------------------------------------------------------------------------');
                   console.log("Multiple documents saved to crypto Collection!! ", cryptoList && cryptoList.length, ' data stored.');
                   console.log('------------------------------------------------------------------------------');
               }
             });
        });

    }
}

module.exports = coin_ids;
