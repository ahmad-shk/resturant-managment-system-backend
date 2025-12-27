const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../configs/db');
const productRoutes = require('../routes/productRoutes');

dotenv.config();
connectDB(); // Database connect karein

const app = express();
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Restaurant API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));