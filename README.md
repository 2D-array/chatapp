# Real-Time Chat Application

A real-time chat web application built with **React**, **Node.js (Express)**, **Socket.io**, and **MongoDB**. This project enables seamless real-time messaging with JWT authentication and Google OAuth.

## 🚀 Features

- **Real-time messaging** with **WebSockets (Socket.io)**
- **Authentication system** using **JWT** & **Google OAuth**
- **MongoDB** integration with **Mongoose** for data storage
- **User-friendly UI** built with **React.js**
- **Secure backend** with **Express.js** and **Node.js**

---

## 🛠️ Tech Stack

### Frontend:
- **React.js** (UI development)
- **React Router** (Navigation)
- **TailwindCSS / Daisy ui** (Styling)
- **Axios** (API calls)

### Backend:
- **Node.js** (Runtime)
- **Express.js** (Backend framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **JWT (JSON Web Tokens)** (Authentication)
- **Socket.io** (WebSockets for real-time messaging)

---

## 📂 Project Structure

```
root/
│── frontend/      # React frontend
│── .env           # Environment variables
│── backend/       # Express backend
│── package.json   # Dependencies and scripts
│── README.md      # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
https://github.com/2D-array/chatapp
cd your-repo
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install  # Install dependencies
```

#### Configure Environment Variables (`.env` file in `backend/`):
```
MONGODB_URI=
PORT= 5001
JWT_SECRET= 
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDNARY_API_SECRET=

NODE_ENV= development
```

Run the backend server:
```bash
npm start
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install  # Install dependencies
npm start    # Start frontend server
```

---

## 🔥 How It Works

1. Users sign up or log in using JWT authentication or Google OAuth.
2. Messages are stored in MongoDB and retrieved in real time.
3. **WebSockets (Socket.io)** enables instant message updates.
4. The frontend communicates with the backend using **REST API** & **WebSockets**.



## 🛡️ Security Measures

- **JWT-based authentication** ensures secure user sessions.
- **Data validation & sanitization** to prevent SQL/NoSQL injections.
- **WebSocket event authentication** to prevent unauthorized access.

---

## 📌 To-Do / Future Enhancements

- ✅ Typing indicators
- ✅ Group chats
- ✅ Message read receipts
- ⏳ Push notifications



