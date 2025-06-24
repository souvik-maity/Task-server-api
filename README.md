# 🛠️ Task API Server

This is a custom RESTful API server built with **Node.js**, **Express**, and **MongoDB** for managing tasks. It supports full **CRUD** operations and is designed as part of an assignment project.

---

## 📌 Features

- Custom API (not based on any public API)
- 4+ API endpoints (Create, Read, Update, Delete)
- MongoDB integration via Mongoose
- Graceful handling of missing database
- Modular and clean file structure

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv
- CORS

---

## 📁 Folder Structure
![Screenshot 2025-06-21 143610](https://github.com/user-attachments/assets/bcad2c17-d83e-481f-93ce-b6c0d485e459)



---

## 🔌 API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/api/tasks`     | Get all tasks         |
| POST   | `/api/tasks`     | Create a new task     |
| PUT    | `/api/tasks/:id` | Update a task by ID   |
| DELETE | `/api/tasks/:id` | Delete a task by ID   |

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/souvik-maity/Task-server-api.git
cd Task-server-api/backend
```
### 2. Install Dependencies
```
npm install
```

### 3.Set Up Environment Variables
Create a .env file using the example provided:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mytaskdb
```


### 4.Start the Server
```
node app.js
```

## 🧪 Testing Summary

We wrote unit, integration, and API tests using **Jest** and **Supertest**.

##  Coverage screenshot below:

![Screenshot 2025-06-24 162634](https://github.com/user-attachments/assets/28c30358-bf38-49bd-84e7-6c7ed42e5e4e)




### 🚀 How to Run Tests

```bash
cd backend
npm install
npm test
yaml
Copy
Edit
```






