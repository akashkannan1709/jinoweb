import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

// routes
app.use("/api", rootRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});


const port = process.env.PORT || 4000;

// Function to start the server
const startServer = async () => {
  try {
    // First, connect to the database
    await connectDB();

    // If database connection is successful, start the server
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });

  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
};

// Start the server
startServer();
