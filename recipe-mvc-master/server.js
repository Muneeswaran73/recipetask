const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const recipeRoutes = require("./router/recipeRouter");

const app = express();

connectDB();

app.use(express.json());
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
