const express = require('express');
const router = express.Router();
const busController = require('../../../Controller/RegisterBus/RegisterBus.controller');

// Create a new bus
router.post('/registerBus', busController.registerBus);

// Get all buses
router.get('/buses', busController.getAllregisterBuses);

// Get a single bus by ID
router.get('/bus/:id', busController.getregisterBusById);

// Update a bus by ID
router.put('/update/:id', busController.updateregisterBus);

// Delete a bus by ID
router.delete('/delete/:id', busController.deleteregisterBus);

module.exports = router;
