var mongoose = require('mongoose');

/* ----------------------------------------------------------
 * Crypto Schema
 * -------------------------------------------------------- */
CryptoSchema = new mongoose.Schema({
    id                 : { type: String, },
    name               : { type: String, },
    symbol             : { type: String, },
    rank               : { type: String, },
    price_usd          : { type: String, },
    price_btc          : { type: String, },
    "24h_volume_usd"   : { type: String, },
    market_cap_usd     : { type: String, },
    available_supply   : { type: String, },
    total_supply       : { type: String, },
    max_supply         : { type: String, },
    percent_change_1h  : { type: String, },
    percent_change_24h : { type: String, },
    percent_change_7d  : { type: String, },
    last_updated       : { type: String, },
    created            : { type: Date, default: Date.now }
}, { collection: 'cryptos' });

/* ----------------------------------------------------------
 * Events: on every save, add the dates
 * -------------------------------------------------------- */
CryptoSchema.pre('save', function(next) {
    this.created = Date.now;
    next();
});

/* ----------------------------------------------------------
 * Exports
 * -------------------------------------------------------- */
module.exports = mongoose.model('Crypto', CryptoSchema);
