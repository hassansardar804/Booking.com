const mongoose = require('mongoose');

const RegisterBusSchema = new mongoose.Schema({
    busNumber: {
        type: String,
        required: true
    },
    busType: {
        type: String,
        required: true
    },
    busCapacity: {
        type: Number,
        required: true
    },
    busRoute: {
        type: String,
        required: true
    },
    busFare: {
        type: Number,
        required: true
    },
    busStatus: {
        type: Boolean,
        required: true
    },
    busDriver: {
        type: String,
        required: true
    },
    busConductor: {
        type: String,
        required: true
    },
    busSeats: {
        type: Number,
        required: true
    },
    busImages: {
        type: [String],
        required: true,
        validate: [arrayLimit, 'Cannot upload more than 4 images']
    }
});

// array size to 4
function arrayLimit(val) {
    return val.length <= 4;
}

const RegisterBus = mongoose.model('RegisterBus', RegisterBusSchema);
module.exports = RegisterBus;
