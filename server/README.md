# 🧠 Task Manager - Backend (Node.js + Express + LowDB)

This is the backend API for the Task Manager app, using **Express.js** and an **in-memory database** with `lowdb`. It exposes RESTful routes to manage tasks.

---

## 📦 Features

- ✅ In-memory task storage (no DB setup required)
- 🔄 Full CRUD API: Create, Read, Update, Delete
- 🔒 CORS enabled for frontend integration
- 🧪 Easily mock different users and task data

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd server
npm install
```

### 2. Start the server

```bash
npm start
```

Runs on: [http://localhost:3001](http://localhost:3001)

---

## 📡 API Endpoints

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/tasks`              | Get all tasks                      |
| GET    | `/tasks?owner=xyz`    | Get tasks by owner                 |
| POST   | `/tasks`              | Create new task                    |
| PUT    | `/tasks/:id`          | Update existing task               |
| DELETE | `/tasks/:id`          | Delete task                        |

---

## 🧪 Sample Task Structure

```json
{
  "id": "a1b2c3",
  "title": "Finish frontend",
  "isCompleted": false,
  "owner": "testuser"
}
```

---

## 🧰 Built With

- [Express](https://expressjs.com/)
- [LowDB](https://github.com/typicode/lowdb)
- [nanoid](https://github.com/ai/nanoid)
- [cors](https://github.com/expressjs/cors)