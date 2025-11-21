import express from 'express';
import  'dotenv/config';
import connectDB from './config/database.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import resultRoutes from './routes/resultRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server is running: ' + PORT));


