const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // 1. Isay add karein
const connectDB = require('../configs/db');
const productRoutes = require('../routes/productRoutes');

dotenv.config();
connectDB();

const app = express();

// 2. CORS ko yahan configure karein
app.use(cors({
  origin: '*', // Production mein yahan apna frontend URL likhein
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Restaurant API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));