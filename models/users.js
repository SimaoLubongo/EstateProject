const mongoose = require('mongoose');

const UsersSchama = new mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, 'Please add a id number'],
            unique: true,
            maxlength: [30, 'Id number can not be more than 30 characters']
        },
        name: {
            type: String,
            required: [true, 'Please add a name'],
            unique: true,
            trim: true,
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        phone: {
            type: String,
            maxlength: [20, 'Phone number can not be longer than 20 characters']
        },
        email: {
            type: String,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email'
            ]
        },
        unit: {
            type: String,
            required: [true, 'Please select a unit number']
        },
        oTP: {
            type: String,
            maxlength: [44, 'OTP cannot be more than 44 characters']
        },
        UserType: {
            type: mongoose.Schema.ObjectId,
            ref: 'UserType',
            required: true
        },
        Tenant: {
            type: mongoose.Schema.ObjectId,
            ref: 'Tenant',
            required: true
        },
        Photo: {
            type: String
        },
        Password: {
            type: String,
            select: false
        }
    }
);

module.exports = mongoose.model('Users', UsersSchama)


