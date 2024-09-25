const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//schema start
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        unique: true,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    Cnic: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        default: 'Male',
        required: true
    }
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', UserSchema)