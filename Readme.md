# 📚 Bookstore RESTful API

A simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB** (via Mongoose) to perform basic CRUD operations on a collection of books. This project is designed with clean code structure using **Models, Controllers, Routes**, and **Config** folders.

---

## 📜 Features

- Add new books
- View all books
- View a single book by ID
- View a book by title
- Update book information
- Delete a book

---

## 📂 Project Structure

```
bookstore-api/
│
├── src/
│   ├── config/         # MongoDB connection config
│   ├── controllers/    # Logic for each API endpoint
│   ├── models/         # Mongoose model schema
│   ├── routes/         # Express routes
│   └── app.js          # Express app setup
│
├── .env                # Environment variables
├── server.js           # App entry point
├── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd bookstore-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
```

### 4. Run the server

```bash
npm start
```

---

## 🛠️ API Endpoints


Base URL: `http://localhost:3000/api/books`

### 1. **Create a new book**

- **POST** `/api/books`
- **Body (JSON):**

```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "price": 499
}
```

---

### 2. **Get all books**

- **GET** `/api/books`

---

### 3. **Get book by ID**

- **GET** `/api/books/:id`

> Example: `/api/books/66300384355f3f167ae3abbd`

---

### 4. **Get book by title**

- **GET** `/api/books/title/:title`

> Example: `/api/books/title/The Pragmatic Programmer`

---

### 5. **Update a book**

- **PUT** `/api/books/:id`
- **Body (JSON):**

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "price": 650
}
```

---

### 6. **Delete a book**

- **DELETE** `/api/books/:id`

---

## 🔍 Testing with Postman

### Example: Create Book

- **Method**: `POST`
- **URL**: `http://localhost:3000/api/books`
- **Body**:
```json
{
  "title": "Eloquent JavaScript",
  "author": "Marijn Haverbeke",
  "price": 350
}
```

- Ensure:
  - Header: `Content-Type: application/json` is set
  - MongoDB is running locally or via cloud

---



## 🧠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Dev Tools**: Nodemon, Postman

---

## 📌 Notes

- Book titles are matched **case-sensitively** in the `getBookByTitle` route.
- Make sure MongoDB is running locally or adjust `MONGO_URI` to your cloud URI.

---

## 🧑‍💻 Author

Built with ❤️ by Pranay Rane  
📧 pranayrane029@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/pranay-rane-7417b5254) | [GitHub](https://github.com/) | [LeetCode](https://leetcode.com/u/Pranay_rane/)

---


