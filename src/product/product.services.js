const { findProduct, findProductById, insertProduct, editProduct, removeProduct } = require("./product.repository");

const getAllProduct = async () => {
  const product = await findProduct();

  return product;
};

const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    throw Error("Product Not Found");
  }

  return product;
};

const createProduct = async (newProduct) => {
  const product = await insertProduct(newProduct);

  return product;
};

const updateProduct = async (id, productData) => {
  await getProductById(id);

  const product = await editProduct(id, productData);

  return product;
};

const deleteProduct = async (id) => {
  await getProductById(id);

  await removeProduct(id);
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
