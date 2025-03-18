import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workoutRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Alleen deze website mag verbinding maken
    methods: ["GET", "POST", "PATCH", "DELETE"]
    }));

// Use express.json() to parse JSON data from the request body
app.use(express.json());

// Use the workout routes
app.use('/api/workouts', workoutRoutes);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

async function run() {
    try {
        await mongoose.connect(process.env.URI);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}


run();
