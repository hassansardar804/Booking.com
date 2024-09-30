const User = require('../../Model/User/User.model');
const bcrypt = require('bcryptjs');

//create a new user
const createUser = async (req, res) => {
    try {
        const { email, password, role, firstName, lastName, phoneNumber, address, gender, profileImage, cnic } = req.body;

        //Check if the user already exists based on cnic
        const existingUser = await User.findOne({ cnic , email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = new User({
            email,
            password: hashedPassword,
            role: role === 'admin' ? 'admin' : 'user',
            firstName,
            lastName,
            phoneNumber,
            address,
            gender,
            profileImage,
            cnic,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        return res.status(201).json({ message: 'User created successfully', user: savedUser });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Controller function to update user/admin details
const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { email, password, role, firstName, lastName, phoneNumber, address, gender, profileImage, cnic } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Hash the password if it is being updated
        let updatedPassword = user.password;
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }

        // Update user fields
        user.email = email || user.email;
        user.password = updatedPassword;
        user.role = role || user.role;
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.address = address || user.address;
        user.gender = gender || user.gender;
        user.profileImage = profileImage || user.profileImage;
        user.cnic = cnic || user.cnic;

        // Save the updated user
        const updatedUser = await user.save();

        return res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Controller function to delete a user/admin
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find the user by ID and delete
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Function to fetch all users (optional, can be used for admin panel)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
};
