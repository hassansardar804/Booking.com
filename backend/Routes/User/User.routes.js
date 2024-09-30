const express = require('express');
const { createUser, getAllUsers, updateUser, deleteUser } = require('../../Controller/User/User.controller');
const router = express.Router();

// Route to create a new user
router.post('/register', createUser);

// Route to get all users (optional, for admin panel)
router.get('/users', getAllUsers);

// Route to update a user by ID
router.put('/users/:userId', updateUser);

// Route to delete a user by ID
router.delete('/users/:userId', deleteUser);

module.exports = router;
