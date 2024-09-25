const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus',
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    travelDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['paid', 'unpaid', 'canceled'],
        default: 'unpaid'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    cnic: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);
