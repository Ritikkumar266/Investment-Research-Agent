import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoutes from "./routes/analyzeRoutes.js";
// Load environment variables
dotenv.config();

// Create Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/analyze", analyzeRoutes);
// Port
const PORT = process.env.PORT || 5000;

// Test Route
app.get("/", (req, res) => {
    res.json({
        message: "Investment Research API is running"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});