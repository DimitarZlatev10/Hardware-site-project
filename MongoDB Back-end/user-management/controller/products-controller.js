const Product = require("../model/Product");
const User = require("../model/User");

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    return next(err);
  }
  if (!products) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  return res.status(200).json(products);
};

const getProductById = async (req, res, next) => {
  const id = req.params.id;
  let product;
  try {
    product = await Product.findById(id);
  } catch (err) {
    return next(err);
  }
  if (!product) {
    return res.status(500).json({ message: "Unable to find product" });
  }
  return res.status(200).json(product);
};

const createProduct = async (req, res, next) => {
  const { title, image, description, price, type, inStock } = req.body;
  if (
    (!title && title == "") ||
    (!image && image == "") ||
    (!description && description == "") ||
    (!price && price < 0) ||
    (!type && type == "") ||
    !inStock ||
    inStock.length < 0
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let product;

  try {
    product = new Product({
      title,
      image,
      description,
      price,
      type,
      inStock,
    });

    product = await product.save();
  } catch (err) {
    return next(err);
  }
  if (!product) {
    return res.status(500).json({ message: "Unable to create product" });
  }

  return res.status(201).json(product);
};

const addToFavourites = async (req, res, next) => {
  const { productId, userId } = req.body;
  const product = await Product.findById(productId);
  const user = await User.findById(userId);

  if (product.favourites.includes(userId)) {
    return res.status(500).json({
      message: "You have already added this product to your favourites",
    });
  }

  if (user.favourites.includes(productId)) {
    return res
      .status(500)
      .json({ message: "This product is already in your favourites" });
  }

  product.favourites.push(userId);
  await product.save();

  user.favourites.push(productId);
  await user.save();

  return res
    .status(200)
    .json({ message: "Item is successfully added to your favourites" });
};

const removeFromFavourites = async (req, res, next) => {
  const { productId, userId } = req.body;
  const product = await Product.findById(productId);
  const user = await User.findById(userId);

  if (!product.favourites.includes(userId)) {
    return res.status(500).json({
      message: "You havent added this product to your favourites",
    });
  }

  if (!user.favourites.includes(productId)) {
    return res.status(500).json({
      message: "This item is not in your favourites",
    });
  }

  const userIndex = product.favourites.indexOf(userId);
  const productIndex = user.favourites.indexOf(productId);

  product.favourites.splice(userIndex, 1);
  user.favourites.splice(productIndex, 1);

  await product.save();
  await user.save();

  return res.status(200).json({
    message: "Product has been successfully removed from your favourites",
  });
};

const addToCart = async (req, res, next) => {
  const { productId, userId } = req.body;
  const product = await Product.findById(productId);
  const user = await User.findById(userId);

  if (product.cart.includes(userId)) {
    return res
      .status(500)
      .json({ message: "You have already added this product to your cart" });
  }

  if (user.cart.includes(productId)) {
    return res
      .status(500)
      .json({ message: "This product is already in your cart" });
  }

  product.cart.push(userId);
  await product.save();
  user.cart.push(productId);
  await user.save();

  return res
    .status(200)
    .json({ message: "Successfully added this product to your cart" });
};

const removeFromCart = async (req, res, next) => {
  const { productId, userId } = req.body;
  const product = await Product.findById(productId);
  const user = await User.findById(userId);

  if (!product.cart.includes(userId)) {
    return res
      .status(500)
      .json({ message: "This product is not in your cart" });
  }

  if (!user.cart.includes(productId)) {
    return res
      .status(500)
      .json({ message: "You havent added this product in your cart" });
  }

  const userIndex = product.cart.indexOf(userId);
  const productIndex = user.cart.indexOf(productId);

  product.cart.splice(userIndex, 1);
  user.cart.splice(productIndex, 1);

  await product.save();
  await user.save();

  return res.status(200).json({
    message: "You have successfully removed this item from your cart",
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  addToFavourites,
  removeFromFavourites,
  addToCart,
  removeFromCart,
};
