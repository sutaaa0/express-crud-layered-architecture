const prisma = require("../db/index");

const findProduct = async () => {
  const product = await prisma.product.findMany();

  return product;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};

const insertProduct = async (newProduct) => {
  const product = await prisma.product.create({
    data: {
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      image: newProduct.image,
    },
  });

  return product;
};

const editProduct = async (id, productData) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      image: productData.image,
    },
  });

  return product;
};

const removeProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  findProduct,
  findProductById,
  insertProduct,
  editProduct,
  removeProduct,
};
