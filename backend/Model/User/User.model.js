const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },

    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    profileImage: {
        type: String,
    },
    cnic: {
        type: String,
        unique: true,
        validate: {
            validator: function (v) {

                return /^\d{13}$/.test(v);
            },
            message: 'Invalid CNIC format',
        },
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;