var CronJob = require('cron').CronJob;
var CryptoSchema = require('../models')
var api = require('../api');

var job = new CronJob({
  // sec, min, hour * * mon-sun 7:59AM
  cronTime: '00 59 07 * * 0-6',
  onTick: () => {
    /* ----------------------------------------------------------
     * Runs every week (Monday through Sunday) at 11:59:00 AM.
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
