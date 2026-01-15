# 📚 Bookmark Manager Backend API

A **production-ready backend API** for managing bookmarks, built with
**Node.js, Express, MongoDB, and JWT authentication**.\
This project is part of the **30 Days -- One Night MERN Projects
Challenge (Day 9)** and focuses on **secure CRUD, pagination, filtering,
search, and performance optimization**.

---

## 🚀 Features

### 🔐 Authentication & Security

- User Signup & Login (JWT-based authentication)
- Password hashing with **bcrypt**
- Protected routes using JWT middleware
- Ownership-based access control (users can only access their own
  bookmarks)

### 📌 Bookmark Management (CRUD)

- **Create** a bookmark
- **Read** bookmarks (single & list)
- **Update** bookmark (partial updates supported)
- **Delete** bookmark

### 📄 Read System (Day 9 Focus)

- Pagination (`page`, `limit`)
- Filtering (`favorite`, `tag`)
- Search (title, url, tags)
- Sorting (by `createdAt`)
- Secure single bookmark fetch

### ⚡ Performance

- MongoDB Indexing for fast queries
- Query validation & limits
- Optimized pagination

---

## 🧠 Architecture Overview

    Client (Postman / Frontend)
          ↓
    JWT Auth Middleware
          ↓
    Controller (Routes)
          ↓
    Query Builder (Filters, Search, Pagination)
          ↓
    MongoDB (Indexed Queries)
          ↓
    JSON Response

---

## 🏗️ Tech Stack

Tech Purpose

---

Node.js Runtime
Express.js API framework
MongoDB Database
Mongoose ODM
JWT Authentication
bcrypt Password hashing
Nodemon Development server

---

## 📂 Folder Structure

    Backend/
    │
    ├── src/
    │   ├── controllers/
    │   │   └── bookMark.controller.js
    │   ├── models/
    │   │   └── bookMark.model.js
    │   ├── routes/
    │   │   └── bookmark.routes.js
    │   ├── middleware/
    │   │   └── auth.middleware.js
    │   └── index.js
    │
    ├── .env
    ├── package.json
    └── README.md

---

## 🔧 Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Run the Project

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Server runs on:

    http://localhost:5000

---

## 🔐 Authentication Flow

### 1️⃣ Register

**POST**

    /api/v1/auth/register

Body:

```json
{
  "name": "Sabya",
  "email": "sabya@test.com",
  "password": "123456"
}
```

### 2️⃣ Login

**POST**

    /api/v1/auth/login

Body:

```json
{
  "email": "sabya@test.com",
  "password": "123456"
}
```

Response:

```json
{
  "success": true,
  "token": "JWT_TOKEN_HERE"
}
```

---

## 🛡️ Authorization Setup (Postman)

Add this header to all requests:

    Authorization: Bearer YOUR_JWT_TOKEN

---

## 📌 API Endpoints

### ➕ Create Bookmark

**POST**

    /api/v1/bookmarks

Body:

```json
{
  "title": "Google",
  "url": "https://google.com",
  "tags": ["search", "tech"],
  "isFavorite": true
}
```

---

### 📄 Get All Bookmarks (Pagination + Filter + Search)

**GET**

    /api/v1/bookmarks?page=1&limit=5&favorite=true&tag=tech&search=google

Response:

```json
{
  "success": true,
  "page": 1,
  "limit": 5,
  "totalResults": 10,
  "totalPages": 2,
  "data": []
}
```

---

### 🔍 Get Single Bookmark

**GET**

    /api/v1/bookmarks/:id

---

### ✏️ Update Bookmark

**PATCH**

    /api/v1/bookmarks/:id

Body:

```json
{
  "title": "Google Search Engine",
  "isFavorite": false
}
```

---

### ❌ Delete Bookmark

**DELETE**

    /api/v1/bookmarks/:id

---

## 📊 Pagination Logic

### Formula

    skip = (page - 1) × limit

### Example

    page=2, limit=5 → skip=5

This means: \> Skip first 5 bookmarks, return next 5

---

## 🔎 Search Logic

Uses MongoDB `$or` + `$regex`:

```js
query.$or = [
  { title: { $regex: search, $options: "i" } },
  { url: { $regex: search, $options: "i" } },
  { tags: { $regex: search, $options: "i" } },
];
```

---

## ⚡ Performance Indexes

```js
markerSchema.index({ user: 1, createdAt: -1 });
markerSchema.index({ title: "text", url: "text", tags: "text" });
```

These improve: - Pagination speed - Search performance - Sorting
efficiency

---

## 🧪 Testing Checklist

Feature Status

---

Signup/Login ✅
JWT Auth ✅
Create Bookmark ✅
Pagination ✅
Filtering ✅
Search ✅
Ownership Protection ✅
Update/Delete ✅

---

## 🧠 Engineering Concepts Learned

- REST API Design
- JWT Authentication & Authorization
- Ownership-based access control
- Pagination & Filtering
- MongoDB Indexing
- Secure API Design
- Scalable Query Architecture

---

## 🎯 Portfolio Statement

> "I built a secure, paginated, searchable, and filterable REST API
> using Node.js, Express, MongoDB, and JWT with performance optimization
> using indexing and ownership-based authorization."

---

## 📅 Challenge Progress

**Day 9 -- Backend Read System** - CRUD completed - Secure API design -
Pagination & Search - Performance indexing - Professional testing flow

---

## 👨‍💻 Author

**Sabya Sachin Mohanta**\
B.Tech IT \| MERN Stack Developer\
India 🇮🇳

---

## ⭐ Future Improvements

- Redis caching
- Swagger API docs
- Docker support
- Rate limiting
- Role-based access (Admin/User)

---

## 📜 License

MIT License -- Free to use and modify
