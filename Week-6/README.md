# 🚀 Week 6: MERN Stack Applications

## 📖 Overview

This week focuses on building full-stack web applications using the MERN (MongoDB, Express, React, Node.js) stack. The projects demonstrate the integration of frontend and backend technologies to create complete, production-ready applications.

## 📚 Topics Covered

- **MongoDB**: NoSQL database design and integration
- **Express.js**: Backend server setup and RESTful API development
- **React**: Frontend UI development with component architecture
- **Node.js**: Server-side JavaScript runtime
- **Full-Stack Architecture**: Client-server communication
- **State Management**: Managing application state
- **API Integration**: Frontend to backend communication
- **Environment Configuration**: .env file setup
- **Project Structure**: Modular, scalable project organization

---

## 📂 Repository Structure

```
Week-6/
├── MERN_EMPLOYEES_APP/
│   ├── emp.http                 # API endpoints for testing
│   ├── BACKEND/
│   │   ├── server.js            # Express server entry point
│   │   ├── package.json         # Backend dependencies
│   │   ├── .env                 # Environment variables
│   │   ├── API/                 # API route handlers
│   │   └── MODELS/              # Database models
│   └── FRONTEND/
│       ├── package.json         # Frontend dependencies
│       ├── index.html           # HTML entry point
│       ├── vite.config.js       # Vite configuration
│       ├── src/                 # React components and logic
│       └── public/              # Static assets
│
├── user_table/
│   ├── package.json             # Root package.json
│   ├── BACKEND/
│   │   ├── server.js            # Express server entry point
│   │   ├── package.json         # Backend dependencies
│   │   ├── API/                 # API route handlers
│   │   ├── Models/              # Database models
│   │   └── .env                 # Environment variables
│   ├── FRONTEND/
│   │   ├── package.json         # Frontend dependencies
│   │   ├── index.html           # HTML entry point
│   │   ├── vite.config.js       # Vite configuration
│   │   ├── src/                 # React components
│   │   └── public/              # Static assets
│   ├── user-table/              # Additional project files
│   └── vite-project/            # Vite project structure
│
└── README.md
```

---

## 🎯 Projects

### 1. **MERN_EMPLOYEES_APP**

An employee management application built with the MERN stack.

**Features:**
- Employee CRUD operations (Create, Read, Update, Delete)
- Employee data storage in MongoDB
- RESTful API for employee management
- React UI for managing employee records
- HTTP API testing with `emp.http`

**Setup Instructions:**

**Backend:**
```bash
cd MERN_EMPLOYEES_APP/BACKEND
npm install
# Configure .env file with MongoDB connection
npm start
```

**Frontend:**
```bash
cd MERN_EMPLOYEES_APP/FRONTEND
npm install
npm run dev
```

---

### 2. **user_table**

A user management application with tabular data display.

**Features:**
- User data management and display
- User table with CRUD operations
- MongoDB integration for user storage
- React components for user interface
- Modular project structure

**Setup Instructions:**

**Backend:**
```bash
cd user_table/BACKEND
npm install
# Configure .env file with MongoDB connection
npm start
```

**Frontend:**
```bash
cd user_table/FRONTEND
npm install
npm run dev
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **MongoDB** | NoSQL database for storing application data |
| **Express.js** | Backend web framework for building REST APIs |
| **React** | Frontend library for building user interfaces |
| **Node.js** | Runtime environment for server-side JavaScript |
| **Vite** | Fast build tool and dev server for React |
| **Axios** | HTTP client for API requests (if used) |

---

## 📝 Key Concepts

1. **Client-Server Architecture**: Communication between React frontend and Express backend
2. **RESTful APIs**: Standard HTTP methods (GET, POST, PUT, DELETE) for CRUD operations
3. **Database Integration**: MongoDB connection and Mongoose schemas for data modeling
4. **Environment Variables**: Secure configuration using .env files
5. **Component-Based UI**: Reusable React components for maintainable frontend code
6. **Full-Stack Development**: Understanding both backend and frontend responsibilities

---

## 🚀 Running the Applications

### For MERN_EMPLOYEES_APP:

1. **Start Backend:**
   ```bash
   cd MERN_EMPLOYEES_APP/BACKEND
   npm install
   npm start
   ```
   Backend will run on `http://localhost:5000` (or configured port)

2. **Start Frontend:**
   ```bash
   cd MERN_EMPLOYEES_APP/FRONTEND
   npm install
   npm run dev
   ```
   Frontend will run on `http://localhost:5173` (Vite default)

### For user_table:

1. **Start Backend:**
   ```bash
   cd user_table/BACKEND
   npm install
   npm start
   ```

2. **Start Frontend:**
   ```bash
   cd user_table/FRONTEND
   npm install
   npm run dev
   ```

---

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local or MongoDB Atlas cloud account)

---

## 🔑 Environment Setup

Create a `.env` file in the BACKEND folder with the following variables:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/database_name
PORT=5000
NODE_ENV=development
```

---

## 📚 Learning Outcomes

By completing Week 6 projects, you will:
- Understand MERN stack architecture and workflow
- Build RESTful APIs with Express.js
- Create interactive React user interfaces
- Integrate MongoDB for data persistence
- Deploy full-stack applications
- Manage application state and API communication
- Handle environment configuration and security

---

## 🔗 Useful Resources

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Guide](https://vitejs.dev/)

---

## ✅ Checklist

- [ ] MongoDB account/connection configured
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] Environment variables configured
- [ ] Backend server running successfully
- [ ] Frontend application running successfully
- [ ] API endpoints tested
- [ ] Database connections verified

---

**Happy coding! 🎉**
