# 📅 Day 8 – Expense Tracker API

**(Dates, Aggregation & Analytics Thinking)**

Day 8 marks the transition from **CRUD-only development** to **real backend engineering**.  
This project focuses on **data filtering, aggregation, and business insights**, which are core to finance and SaaS backends.

---

## 🚀 Project Overview

A **User-based Expense Tracker Backend** where:

- Each user tracks personal expenses
- Expenses are filtered by date and category
- Backend computes **monthly insights**
- Strong focus on **authorization & analytics**, not UI

❌ No frontend  
❌ No charts  
❌ No overengineering  
✅ Backend logic first

---

## 🧠 What You Learn

### Backend Concepts

- Date handling in MongoDB
- Query filtering using `$gte` & `$lte`
- Aggregation pipelines (`$match`, `$group`, `$sum`)
- Analytics & business-logic APIs

### MongoDB / Mongoose

- Difference between `find()` and `aggregate()`
- ObjectId casting in aggregation
- Schema design for analytics
- Category-wise grouping

### Security

- JWT authentication
- Ownership-based authorization
- Protecting financial data

---

## 📦 Features Implemented

### 1️⃣ Authentication (Reused from Day 7)

- Signup
- Login
- JWT protected routes

---

### 2️⃣ Expense CRUD (User-Specific)

#### Expense Schema

```json
{
  "user": "ObjectId",
  "title": "String",
  "category": "String",
  "amount": "Number",
  "date": "Date",
  "createdAt": "Date"
}
```

#### Endpoints

```
POST   /api/v1/expenses
PUT    /api/v1/expenses/:id
DELETE /api/v1/expenses/:id
```

Only the **owner** can update or delete expenses.

---

### 3️⃣ Fetch Expenses by Date Range

```
GET /api/v1/expenses/range?month=1&year=2026
```

Optional category filter:

```
GET /api/v1/expenses/range?month=1&year=2026&category=Food
```

**Concepts Used**

- Query parameters
- Date range filtering
- `$gte` / `$lte`
- Sorting (latest first)

---

### 4️⃣ 🔥 Expense Insights (Aggregation)

```
GET /api/v1/expenses/insights?month=1&year=2026
```

#### Sample Response

```json
{
  "success": true,
  "totalExpense": 7300,
  "categoryBreakdown": {
    "Food": 300,
    "Travel": 2800,
    "Shopping": 1200
  }
}
```

#### Aggregation Pipeline

- `$match` → filter by user & date
- `$group` → group by category
- `$sum` → calculate totals

This is where **CRUD ends and analytics begins**.

---

## 🧠 Key Takeaways

- CRUD stores data, **aggregation explains data**
- Backend should return **insights**, not raw rows
- `find()` auto-casts ObjectId, `aggregate()` does not
- Filters belong in **query parameters**
- Authorization is mandatory for financial data

---

## ✅ Day 8 Outcome

After Day 8, you can confidently:

- Build finance-style backends
- Write analytics APIs
- Handle real business queries
- Think like a backend engineer

---

**Day 8 Complete 🚀**  
_Backend logic over visuals. Analytics over CRUD._
