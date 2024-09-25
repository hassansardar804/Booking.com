const User = require('../../Model/User/User.model');
const Bus = require('../../Model/Bus/Bus.model');
const Ticket = require('../../Model/Ticket/Ticket.model');

// Generate a ticket and reserve a seat on the bus
const generateTicket = async (req, res) => {
    try {
        const { userId, busId, seatNumber, fare, travelDate, cnic } = req.body;

        if (!userId || !busId || !seatNumber || !fare || !travelDate || !cnic) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        const user = await User.findById(userId);
        const bus = await Bus.findById(busId);

        if (!user) return res.status(404).json({ error: 'User not found.' });
        if (!bus) return res.status(404).json({ error: 'Bus not found.' });

        if (bus.reservedSeats >= bus.capacity) {
            return res.status(400).json({ error: 'No seats available on this bus.' });
        }

        // Check if the seat is already reserved
        const existingTicket = await Ticket.findOne({ busId, seatNumber, status: { $ne: 'canceled' } });
        if (existingTicket) {
            return res.status(400).json({ error: 'This seat is already reserved.' });
        }

        bus.reservedSeats += 1;
        await bus.save();

        const ticket = new Ticket({
            userId,
            busId,
            seatNumber,
            fare,
            travelDate,
            status: 'unpaid',
            cnic
        });

        await ticket.save();

        res.status(201).json({
            message: `Ticket generated for user ${userId} on bus ${busId}.`,
            ticket
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cancel a ticket and release a reserved seat on the bus
const cancelTicket = async (req, res) => {
    try {
        const { ticketId } = req.params;

        const ticket = await Ticket.findById(ticketId);
        if (!ticket) return res.status(404).json({ error: 'Ticket not found.' });
        if (ticket.status === 'canceled') return res.status(400).json({ error: 'Ticket is already canceled.' });

        ticket.status = 'canceled';
        await ticket.save();

        const bus = await Bus.findById(ticket.busId);
        if (bus) {
            bus.reservedSeats -= 1;
            await bus.save();
        }

        res.status(200).json({ message: `Ticket ${ticketId} has been canceled.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all reserved seats for a specific bus
const getReservedSeats = async (req, res) => {
    try {
        const { busId } = req.params;
        const reservedTickets = await Ticket.find({ busId, status: { $ne: 'canceled' } }).select('seatNumber');
        const reservedSeats = reservedTickets.map(ticket => ticket.seatNumber);
        res.status(200).json(reservedSeats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    generateTicket,
    cancelTicket,
    getReservedSeats
};
