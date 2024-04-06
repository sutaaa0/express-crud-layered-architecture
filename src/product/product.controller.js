const express = require("express");
const { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct } = require("./product.services");
const router = express.Router();

router.get("/", async (req, res) => {
  const product = await getAllProduct();

  res.send(product);
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await getProductById(id);

    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const newProduct = req.body;
  if (!(newProduct.name && newProduct.description && newProduct.price && newProduct.image)) {
    return res.status(400).send("some field are missing");
  }
  const product = await createProduct(newProduct);

  res.send({
    data: product,
    message: "create product secces",
    status: 200,
  });
});

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const productData = req.body;

  if (!(productData.name && productData.description && productData.price && productData.image)) {
    return res.status(400).send("some field are missing");
  }

  const product = await updateProduct(id, productData);

  res.send({
    data: product,
    message: "update product succes",
    status: 200,
  });
});

router.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const productData = req.body;

  const product = await updateProduct(id, productData);
  if (!(productData.name || productData.description || productData.price || productData.image)) {
    res.status(400).send("some fields are missing");
  }

  res.send({
    data: product,
    message: "update product succes",
    status: 200,
  });
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteProduct(id);

    res.status(200).send("delete succes");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
