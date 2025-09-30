const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const BACKEND_PORT = process.env.BACKEND_PORT || 4000;
const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation',
        },
        servers: [
            {
                url: `http://localhost:${BACKEND_PORT}`,
                description: 'Development server',
            },
        ],
    },
    apis: ['./app.js'], // Указываем текущий файл как источник документации
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(cors({
    origin: [`http://localhost:${FRONTEND_PORT}`],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    optionsSuccessStatus: 200,
}));
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Get sample data
 *     description: Returns a simple message with timestamp
 *     tags: [Data]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *               example:
 *                 message: "Hello from Express backend!"
 *                 timestamp: "2023-10-01T12:00:00.000Z"
 */
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from Express backend!',
        timestamp: new Date().toISOString()
    });
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated user ID
 *         name:
 *           type: string
 *           description: User's name
 *         email:
 *           type: string
 *           format: email
 *           description: User's email
 *         created:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *       example:
 *         id: 123456789
 *         name: "John Doe"
 *         email: "john@example.com"
 *         created: "2023-10-01T12:00:00.000Z"
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *             example:
 *               name: "John Doe"
 *               email: "john@example.com"
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    // Базовая валидация
    if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required'
        });
    }

    res.json({
        id: Date.now(),
        name,
        email,
        created: new Date().toISOString()
    });
});

// Health check endpoint
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     description: Check if the API is running
 *     tags: [System]
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});

// Запуск сервера
app.listen(BACKEND_PORT, () => {
    console.log(`Backend server running on http://localhost:${BACKEND_PORT}`);
    console.log(`Swagger docs available at http://localhost:${BACKEND_PORT}/api-docs`);
    console.log(`Health check at http://localhost:${BACKEND_PORT}/health`);
});