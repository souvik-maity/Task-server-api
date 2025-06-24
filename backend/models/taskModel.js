const db = require('../db');


const getAllTasks = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM tasks');
    return rows;
  } catch (err) {
    console.error('❌ MySQL ERROR:', err.message);  // 👈 Add this line
    throw err;
  }
};


const createTask = async (title, description) => {
  const [result] = await db.query(
    'INSERT INTO tasks (title, description) VALUES (?, ?)',
    [title, description]
  );
  return { id: result.insertId, title, description };
};

const updateTask = async (id, title, description) => {
  await db.query(
    'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
    [title, description, id]
  );
};

const deleteTask = async (id) => {
  await db.query('DELETE FROM tasks WHERE id = ?', [id]);
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};
