var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* ----------------------------------------------------------
 * User Schema
 * -------------------------------------------------------- */
var UserSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
}, { collection: 'users' });

/* ----------------------------------------------------------
 * Exports
 * -------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema);
