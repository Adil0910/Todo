require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./Config/db');

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',require('./Routes/todoRoutes'));
app.use('/api/auth',require('./Routes/authRoutes'));
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})