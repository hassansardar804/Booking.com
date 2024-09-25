const BusModel = require('../../Model/Bus/Bus.model');
const RegisteredBus = require('../../Model/Bus/BusRegister/Registerbus.model');

// Create a new bus
exports.createBus = async (req, res) => {
  try {
    const registeredBus = await RegisteredBus.findById(req.body.ID);
    if (!registeredBus) {
      return res.status(404).json({ message: 'Registered bus not found' });
    }

    const newBus = new BusModel({
      ID: req.body.ID,
      Name: req.body.Name,
      Route: req.body.Route,
      rightDeparture: req.body.rightDeparture,
      rightArrival: req.body.rightArrival,
      late: req.body.late,
      lateDeparture: req.body.lateDeparture || null,
      lateArrival: req.body.lateArrival || null,
      lateStatus: req.body.lateStatus || false,
      Capacity: req.body.Capacity || 120,
      reservedSeats: 0,
      BusAvailable: req.body.BusAvailable || true
    });

    const savedBus = await newBus.save();
    res.status(201).json(savedBus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all buses
exports.getAllBuses = async (req, res) => {
  try {
    const buses = await BusModel.find();

    const busesWithLateInfo = buses.map(bus => {
      if (bus.late === "yes") {
        return {
          ...bus._doc,
          lateDeparture: bus.lateDeparture || "N/A",
          lateArrival: bus.lateArrival || "N/A"
        };
      }
      return bus;
    });

    res.status(200).json(busesWithLateInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single bus by ID
exports.getBusById = async (req, res) => {
  try {
    const bus = await BusModel.findById(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    if (bus.late === "yes") {
      const busWithLateInfo = {
        ...bus._doc,
        lateDeparture: bus.lateDeparture || "N/A",
        lateArrival: bus.lateArrival || "N/A"
      };
      return res.status(200).json(busWithLateInfo);
    }

    res.status(200).json(bus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchBus = async (req, res) => {
  const { fromCity, toCity, date } = req.body;

  try {
    const buses = await BusModel.find({
      Route: { $regex: new RegExp(`${fromCity}.*${toCity}`, 'i') },
      rightDeparture: { $gte: date }
    });

    if (!buses.length) {
      return res.status(404).json({ message: 'No buses found for this route on the selected date.' });
    }

    res.status(200).json(buses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a bus by ID
exports.updateBus = async (req, res) => {
  try {
    const registeredBus = await RegisteredBus.findById(req.body.ID);
    if (!registeredBus) {
      return res.status(404).json({ message: 'Registered bus not found' });
    }

    const updatedBus = await BusModel.findByIdAndUpdate(
      req.params.id,
      {
        ID: req.body.ID,
        Name: req.body.Name,
        Route: req.body.Route,
        rightDeparture: req.body.rightDeparture,
        rightArrival: req.body.rightArrival,
        late: req.body.late,
        lateDeparture: req.body.lateDeparture || null,
        lateArrival: req.body.lateArrival || null,
        lateStatus: req.body.lateStatus || false,
        Capacity: req.body.Capacity,
        BusAvailable: req.body.BusAvailable
      },
      { new: true, runValidators: true }
    );

    if (!updatedBus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.status(200).json(updatedBus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a bus by ID
exports.deleteBus = async (req, res) => {
  try {
    const deletedBus = await BusModel.findByIdAndDelete(req.params.id);
    if (!deletedBus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
