const express = require('express');
const router = express.Router();
const ticketController = require('../../Controller/Ticket/Ticket.controller');

// Route to generate a ticket
router.post('/generateTicket', ticketController.generateTicket);

// Route to get all reserved seats for a specific bus
router.get('/reservedSeats/:busId', ticketController.getReservedSeats);

// Route to cancel a ticket
router.delete('/cancelTicket', ticketController.cancelTicket);


module.exports = router;
