# Eventify - Event Management Platform

A full-stack event management application with user authentication, admin dashboard, and contact form functionality.

## 🚀 Live Demo

- **Frontend:** https://frontend-eta-cyan-69.vercel.app
- **Backend:** https://backend-theta-opal-82.vercel.app

## ✨ Features

- **User Authentication**
  - User registration and login
  - Admin registration and login
  - JWT token-based authentication

- **Event Management**
  - View available services/events
  - Add new services (admin only)
  - Service listing with descriptions

- **Contact Form**
  - Send messages via contact form
  - Email and subject fields
  - Form validation

- **Responsive Design**
  - Mobile-friendly interface
  - Modern UI with React
  - Smooth navigation

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (for production)
- Git

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/sarvamangala-c/Eventify_Project.git
cd Eventify_Project
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## ⚙️ Environment Variables

### Backend (.env)

Create a `.env` file in the `backend/config/` directory:

```env
PORT=4000
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/?retryWrites=true
FRONTEND_URL=http://localhost:5173
JWT_SECRET=your-secret-key
```

### Frontend (.env)

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:4000
```

## 🏃 Running the Project

### 1. Start MongoDB

Make sure your MongoDB database is running (local or Atlas).

### 2. Start Backend Server

```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:4000`

### 3. Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
Eventify_Project/
├── backend/
│   ├── config/
│   │   └── config.env          # Environment variables
│   ├── controller/
│   │   └── messageController.js # Message handling logic
│   ├── database/
│   │   └── dbConnection.js     # MongoDB connection
│   ├── models/
│   │   └── Message.js          # Message schema
│   ├── router/
│   │   └── messageRouter.js    # API routes
│   ├── app.js                  # Express app configuration
│   ├── server.js               # Server entry point
│   ├── vercel.json             # Vercel deployment config
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── AddService.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminRegister.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ServiceList.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── UserLogin.jsx
│   │   │   └── UserRegister.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Authentication context
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # React entry point
│   │   └── config.js            # API configuration
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── .gitignore
├── DEPLOYMENT.md                # Deployment guide
└── README.md                    # This file
```

## 🌐 Deployment

The application is deployed on Vercel with MongoDB Atlas.

### Deployment Links
- **Frontend:** https://frontend-eta-cyan-69.vercel.app
- **Backend:** https://backend-theta-opal-82.vercel.app

### Custom Domains
- **Frontend:** https://eventify-2024.vercel.app
- **Backend:** https://eventify-api-2024.vercel.app

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🔐 API Endpoints

### Message Endpoints
- `POST /api/v1/message/send` - Send a message via contact form

### Authentication Endpoints (Planned)
- `POST /api/v1/auth/register/user` - Register as user
- `POST /api/v1/auth/register/admin` - Register as admin
- `POST /api/v1/auth/login/user` - User login
- `POST /api/v1/auth/login/admin` - Admin login

### Service Endpoints (Planned)
- `GET /api/v1/services` - Get all services
- `POST /api/v1/services` - Add new service (admin only)

## 🧪 Testing

```bash
# Backend tests (if added)
cd backend
npm test

# Frontend tests (if added)
cd frontend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- **Sarvamangala M C** - Initial work

## 🙏 Acknowledgments

- Vercel for hosting
- MongoDB Atlas for database
- React community for amazing libraries

## 📞 Support

For support, email sarvamangala@gmail.com or open an issue in the repository.

## 🔄 Version History

- **1.0.0** (2026-07-01)
  - Initial release
  - User authentication
  - Contact form
  - Admin features
  - Responsive design
  - Deployment on Vercel

---

**Built with ❤️ using React, Node.js, and MongoDB**
