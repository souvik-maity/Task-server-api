const db = require('../db');  // Correct relative path


// taskControllers.js

const getTasks = async (req, res) => {
  res.status(200).json([
    { id: 1, title: 'Mock Task 1', description: 'Test task 1' },
    { id: 2, title: 'Mock Task 2', description: 'Test task 2' }
  ]);
};

const createTask = async (req, res) => {
  res.status(201).json({ message: 'Mock task created' });
};

const updateTask = async (req, res) => {
  res.status(200).json({ message: 'Mock task updated' });
};

const deleteTask = async (req, res) => {
  res.status(200).json({ message: 'Mock task deleted' });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
