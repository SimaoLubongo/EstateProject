const mongoose = require('mongoose');

const UserTypeSchama = new mongoose.Schema(
    {
        Descr: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('UserType', UserTypeSchama)


