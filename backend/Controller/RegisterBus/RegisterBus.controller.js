const RegisterBus = require('../../Model/Bus/BusRegister/Registerbus.model');

// Create a new bus
const registerBus = async (req, res) => {
    try {
        const newBus = new RegisterBus(req.body);
        await newBus.save();
        res.status(201).json({ message: 'Bus registered successfully', newBus });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all buses
const getAllregisterBuses = async (req, res) => {
    try {
        const buses = await RegisterBus.find();
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single bus by ID
const getregisterBusById = async (req, res) => {
    try {
        const bus = await RegisterBus.findById(req.params.id);
        if (!bus) return res.status(404).json({ message: 'Bus not found' });
        res.status(200).json(bus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a bus by ID
const updateregisterBus = async (req, res) => {
    try {
        const updatedBus = await RegisterBus.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBus) return res.status(404).json({ message: 'Bus not found' });
        res.status(200).json({ message: 'Bus updated successfully', updatedBus });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a bus by ID
const deleteregisterBus = async (req, res) => {
    try {
        const deletedBus = await RegisterBus.findByIdAndDelete(req.params.id);
        if (!deletedBus) return res.status(404).json({ message: 'Bus not found' });
        res.status(200).json({ message: 'Bus deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    registerBus,
    getAllregisterBuses,
    getregisterBusById,
    updateregisterBus,
    deleteregisterBus
};
