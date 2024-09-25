const express = require('express');
const router = express.Router();
const BusModel = require('../../../Model/Bus/Bus.model');

// Get bus details
router.get('/:id', async (req, res) => {
    try {
        const bus = await BusModel.findById(req.params.id);
        if (!bus) {
            return res.status(404).send({ message: 'Bus not found' });
        }

        let lateArrival = null;
        let lateDeparture = null;
        if (bus.lateStatus) {
            lateArrival = bus.lateArrival;
            lateDeparture = bus.lateDeparture;
        }

        let reservationStatus = null;
        if (bus.Capacity <= 0) {
            reservationStatus = "Fully Reserved";
        } else {
            reservationStatus = "Available";
        }

        res.send({
            bus: bus,
            lateArrival: lateArrival,
            lateDeparture: lateDeparture,
            reservationStatus: reservationStatus
        });
    } catch (err) {
        res.status(500).send({ message: 'Error fetching bus details' });
    }
});

// Reserve a seat
router.post('/:id/reserve', async (req, res) => {
    try {
        const bus = await BusModel.findById(req.params.id);
        if (!bus) {
            return res.status(404).send({ message: 'Bus not found' });
        }

        if (bus.Capacity <= 0) {
            return res.status(400).send({ message: 'Bus is fully reserved' });
        }

        bus.Capacity -= 1;
        await bus.save();

        res.send({ message: 'Seat reserved successfully' });
    } catch (err) {
        res.status(500).send({ message: 'Error reserving seat' });
    }
});

module.exports = router;