const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("hallo world");
});

const productController = require("./product/product.controller");

app.use("/products", productController);

app.listen(PORT, () => {
  console.log("api running in PORT:" + PORT);
});
