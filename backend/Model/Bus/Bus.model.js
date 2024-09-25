const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
  ID: {
    type: mongoose.Types.ObjectId,
    ref: 'RegisterBus',
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Route: {
    type: String,
    required: true
  },
  rightDeparture: {
    type: String,
    required: true
  },
  rightArrival: {
    type: String,
    required: true
  },
  reservedSeats: {
    type: Number,
    required: true,
    default: 0
  },
  late: {
    type: String,
    enum: ["yes", "no"],
    required: true,
    default: "no"
  },
  lateDeparture: {
    type: String,
    required: false
  },
  lateArrival: {
    type: String,
    required: false
  },
  lateStatus: {
    type: Boolean,
    required: false
  },
  Capacity: {
    type: Number,
    required: false,
    default: 120
  },
  BusAvailable: {
    type: Boolean,
    required: true,
    default: true
  }
});

// Method to check if the bus is full
BusSchema.methods.isFull = function () {
  return this.reservedSeats >= this.Capacity;
};

// Method to reserve a seat
BusSchema.methods.reserveSeat = async function () {
  if (!this.isFull()) {
    this.reservedSeats += 1;
    await this.save();
  } else {
    throw new Error('Bus is full, cannot reserve more seats.');
  }
};

// Method to release a reserved seat
BusSchema.methods.releaseSeat = async function () {
  if (this.reservedSeats > 0) {
    this.reservedSeats -= 1;
    await this.save();
  } else {
    throw new Error('No reserved seats to release.');
  }
};

module.exports = mongoose.model('Bus', BusSchema);
