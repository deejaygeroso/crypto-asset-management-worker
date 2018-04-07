var mongoose = require('mongoose');

/* ----------------------------------------------------------
 * Crypto Schema
 * -------------------------------------------------------- */
CryptoIdsSchema = new mongoose.Schema({
    id         : { type: String },
    name         : { type: String },
    string         : { type: String },
    created            : { type: Date, default: Date.now }
}, { collection: 'crypto_ids' });

/* ----------------------------------------------------------
 * Events: on every save, add the dates
 * -------------------------------------------------------- */
CryptoIdsSchema.pre('save', function(next) {
    this.created = Date.now;
    next();
});

/* ----------------------------------------------------------
 * Exports
 * -------------------------------------------------------- */
module.exports = mongoose.model('CryptoIds', CryptoIdsSchema);
