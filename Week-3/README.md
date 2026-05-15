# 🚀 ATP - Week 3

## 📖 Overview

This folder contains the Week 3 backend project and MongoDB practice exercises completed during the ATP Training Program.

Week 3 focused on Node.js backend development with MongoDB and Express, including:
- MongoDB fundamentals (databases, collections, documents)
- CRUD operations using MongoDB and Mongoose
- Mongoose schema design and validation
- RESTful API development with Express
- JWT authentication and cookie-based session handling
- Modular backend structure and centralized error handling

---

## 📂 Repository Structure

```text
Week-3/
├── Product&User_Backend/
│   ├── APIs/
│   │   ├── ProductAPI.js
│   │   └── UsersAPI.js
│   ├── auth/
│   ├── contollers/
│   ├── middlewares/
│   │   └── verifytoken.js
│   ├── models/
│   │   ├── ProductModel.js
│   │   └── UserModel.js
│   ├── package.json
│   ├── reqq.http
│   └── server.js
├── MongoDbPractice.txt
└── README.md
```

---

# 📅 MongoDB Practice

## 📚 Topics Covered
- NoSQL database concepts
- MongoDB shell commands
- Working with collections and documents
- CRUD operations
- Query filtering and data retrieval

### 📄 File Description
- **MongoDbPractice.txt**
  - Contains MongoDB practice commands, queries, and examples of database operations.

---

# 📅 Product & User Backend Application

## 📚 Features
A Node.js and Express backend demonstrating API development, authentication, and database integration.

### Core Implementation
- **Mongoose ODM:** Schema definitions and validation for users and products.
- **RESTful APIs:** Separate product and user routes.
- **Authentication:** JWT-based authentication with cookie support.
- **Middleware:** `verifytoken.js` protects private routes.
- **Error Handling:** Centralized Express error middleware for validation and server errors.

### Key Files
- **server.js** — Main application entry point and API setup.
- **models/** — Database schemas for users and products.
- **APIs/** — Request handlers for user and product endpoints.
- **reqq.http** — HTTP request collection for API testing in VS Code.

---

## 💡 Key Learnings

From Week 3, I practiced:
- Building a backend server with Express and MongoDB.
- Designing models and validations with Mongoose.
- Creating secure authentication workflows using JWT and cookies.
- Organizing backend code into modular folders.
- Handling errors with custom middleware.
- Testing APIs with HTTP request files.
