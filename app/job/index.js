var CronJob = require('cron').CronJob;
var CryptoSchema = require('../models')
var api = require('../api');

var job = new CronJob({
  cronTime: '59 59 19 * * 0-6',
  onTick: () => {
    /* ----------------------------------------------------------
     * Runs every weekday (Monday through Sunday) at 12:00:00 AM.
     * -------------------------------------------------------- */
    api.coinmarketcapReq(null, (err, res, cryptoList)=>{
        CryptoSchema.collection.insert(cryptoList, function (err, docs) {
           if (err){
               return console.error('Save to Collection failed: ', err);
           } else {
               console.log('------------------------------------------------------------------------------');
               console.log("JOB: Multiple documents saved to crypto Collection!! ", cryptoList && cryptoList.length, ' data stored.');
               console.log('------------------------------------------------------------------------------');
           }
         });
    });
  },
  start: false,
  timeZone: 'Asia/Manila'
});

module.exports = job;
