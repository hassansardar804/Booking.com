    const express = require('express');
    const router = express.Router();
    const busController = require('../../Controller/Bus/Bus.controller');

    // Create a new bus
    router.post('/create', busController.createBus);

    // Get all buses
    router.get('/get', busController.getAllBuses);

    // Search for buses
    router.post('/search', busController.searchBus);


    // Get a single bus by ID
    router.get('/get/:id', busController.getBusById);

    // Update a bus by ID
    router.put('/update/:id', busController.updateBus);

    // Delete a bus by ID
    router.delete('/delete/:id', busController.deleteBus);

    module.exports = router;
