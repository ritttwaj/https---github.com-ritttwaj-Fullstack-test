# FullStack Project

## 📋 Project Overview

This is a full-stack web application with separate frontend and backend repositories.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies
```bash
# Root directory
npm init -y
npm install

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### Running the Application

#### Development Mode
1. Start Backend
```bash
cd backend
npm start
```

2. Start Frontend
```bash
cd frontend
npm start
```

## 🛠 Environment Configuration

### Backend `.env` Example
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yourdatabase
JWT_SECRET=your_secret_key
```

### Frontend `.env` Example
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📂 Project Structure
```
FullStack-Project/
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   └── main.js
└── README.md
```

## 🔧 Scripts

### Frontend
- `npm start`: Run development server
- `npm run build`: Create production build
- `npm test`: Run tests

### Backend
- `npm start`: Start server
- `npm run dev`: Development mode with nodemon
- `npm test`: Run backend tests

## 🐛 Troubleshooting

- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies
- Check console for error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

## 📄 License

[Specify License - e.g., MIT]

## 📧 Contact

Ritwaj Ranjan
ritwajranjan.om@gmail.com
```
