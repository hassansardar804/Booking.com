const User = require('../../Model/User/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, Cnic, password } = req.body;
        const user = new User({ name, email, Cnic, password });
        await user.save();
        res.json({
            msg: 'User registered',
            user
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password, Cnic } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({

                msg: 'Invalid credentials',



            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token: token,

            user
        });
    } catch (err) {
        res.status(500).json({
            msg: err.message
        });
    }
};
