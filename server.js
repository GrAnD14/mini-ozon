const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Vite dev server и production
    credentials: true
}));
app.use(express.json());

// API routes
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from Express backend!',
        timestamp: new Date().toISOString()
    });
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    res.json({
        id: Date.now(),
        name,
        email,
        created: new Date().toISOString()
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});