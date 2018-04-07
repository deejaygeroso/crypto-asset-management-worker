var express = require('express');
var mongoose = require('mongoose');
var app = express();

var job = require('./app/job');
const config = require('./app/config');

// setup mongoose connection
mongoose.connect(config.MONGO_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

var coin_ids = require('./app/job/coin_ids');

// create all id's if not created yet
db.collection('cryptos').count(function(err, count) {
    if( count == 0) {
        coin_ids.fetchCryptoData();
    }
    else {
        console.log('------------------------------------------------------------------------------');
        console.log("Total Number of cryptos history data from Database: " + count);
        console.log('------------------------------------------------------------------------------');
    }
});

// start running job
job.start();

// status of jub running
setInterval(()=>{
    if(job.running) {
        console.log('Cron Job Running ---------------------------> CHECKED');
    } else {
        console.log('Cron Job Running !!!!!!!!!!!!!!!!!!!!!!!!!!!! ERROR');
    }
}, 3600000); // log this every hour

app.get('/', function(req, res){
  res.send('TheBitJob!!');
});

app.listen(config.PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${config.PORT}`);
});
