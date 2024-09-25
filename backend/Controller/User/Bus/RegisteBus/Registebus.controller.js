const RegisterBus = require('../../../../Model/Bus/BusRegister/Registerbus.model');

// Create a new bus
const createBus = async (req, res) => {
    try {
        const { busNumber, busType, busCapacity, busRoute, busFare, busStatus, busDriver, busConductor, busSeats } = req.body;

        // Create a new bus instance
        const newBus = new RegisterBus({
            busNumber: busNumber,
            busType: busType,
            busCapacity: busCapacity,
            busRoute: busRoute,
            busFare: busFare,
            busStatus: busStatus,
            busDriver: busDriver,
            busConductor: busConductor,
            busSeats: busSeats
        });

        // Save the bus to the database
        await newBus.save();
        res.status(201).json({
            message: 'Bus registered successfully!',
            data: newBus
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error registering bus',
            error: error.message
        });
    }
};

// Get all buses
const getAllBuses = async (req, res) => {
    try {
        const buses = await RegisterBus.find();
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching buses',
            error: error.message
        });
    }
};

//  single bus by ID
const getBusById = async (req, res) => {
    try {
        const bus = await RegisterBus.findById(req.params.id);
        if (!bus) {
            return res.status(404).json({
                message: 'Bus not found'
            });
        }
        res.status(200).json(bus);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching bus',
            error: error.message
        });
    }
};

// Update a bus by ID
const updateBus = async (req, res) => {
    try {
        const updatedBus = await RegisterBus.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedBus) {
            return res.status(404).json({
                message: 'Bus not found'
            });
        }
        res.status(200).json({
            message: 'Bus updated successfully!',
            data: updatedBus
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating bus',
            error: error.message
        });
    }
};

// Delete a bus by ID
const deleteBus = async (req, res) => {
    try {
        const deletedBus = await RegisterBus.findByIdAndDelete(req.params.id);
        if (!deletedBus) {
            return res.status(404).json({ message: 'Bus not found' });
        }
        res.status(200).json({ message: 'Bus deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bus', error: error.message });
    }
};

module.exports = {
    createBus,
    getAllBuses,
    getAllBuses,
    getBusById,
    updateBus,
    deleteBus
}