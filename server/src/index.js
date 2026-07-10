import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import analyzeRoutes from "./routes/analyzeRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();

const app = express();

// Middleware FIRST
app.use(cors());

app.use(express.json());

// Routes AFTER middleware
app.use("/api/search", searchRoutes);

app.use("/api/analyze", analyzeRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Investment Research API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});