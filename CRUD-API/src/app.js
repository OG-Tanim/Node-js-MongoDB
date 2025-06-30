import express from "express";
import productRoutes from "./routes/product.routes.js"; // Importing product routes

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Testing
app.get("/health", (req, res) => {
  res.send("Welcome to the CRUD API");
});

//Routes for Products
app.use("/api/products", productRoutes);

export default app;
