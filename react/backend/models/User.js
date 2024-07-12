const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
});

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);