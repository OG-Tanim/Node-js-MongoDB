import mongoose from "mongoose";
import app from "./src/app.js";

// Connect to MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URI).then(() => {
      console.log("Connected to MongoDB");
    });

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

startServer();
