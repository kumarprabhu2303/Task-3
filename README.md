# Books REST API (In-Memory)

A lightweight **REST API** built with **Node.js** and **Express** that performs CRUD (Create, Read, Update, Delete) operations on a list of books. This project uses an in-memory array to store data, meaning it requires no external database setup.

## 🚀 Features

- **GET /books** - Retrieve all books in the list.
- **GET /books/:id** - Retrieve a specific book by its ID.
- **POST /books** - Add a new book (requires `title` and `author`).
- **PUT /books/:id** - Update an existing book's details by ID.
- **DELETE /books/:id** - Remove a book from the list by ID.

---

## 🛠️ Prerequisites & Installation

Before running the project, ensure you have [Node.js](https://nodejs.org) installed on your machine.

1. **Clone the repository or navigate to your project directory:**
   ```bash
   cd "task 3"
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

---

## 💻 Running the Server

Start the development server with the following command:
```bash
node server.js
```
The server will start running at **`http://localhost:3000`**.

---

## 🧪 API Testing Reference

You can test these endpoints using tools like **Postman**, **Thunder Client**, or **cURL**.

| Method | Endpoint | Request Body (JSON) | Expected Status |
| :--- | :--- | :--- | :--- |
| **GET** | `/books` | *None* | `200 OK` |
| **GET** | `/books/1` | *None* | `200 OK` / `404 Not Found` |
| **POST** | `/books` | `{"title": "Brave New World", "author": "Aldous Huxley"}` | `201 Created` |
| **PUT** | `/books/2` | `{"title": "Nineteen Eighty-Four"}` | `200 OK` |
| **DELETE**| `/books/1` | *None* | `200 OK` |

> 💡 **Postman Note:** For `POST` and `PUT` requests, go to the **Body** tab, select **raw**, and set the format to **JSON**.

---

## 🧠 Key Learnings

- **Express Routing:** Handled dynamic routing parameters using `req.params.id`.
- **Middleware:** Utilized `express.json()` to successfully parse incoming request bodies.
- **HTTP Status Codes:** Implemented proper semantic responses like `201 Created`, `400 Bad Request`, and `404 Not Found`.
