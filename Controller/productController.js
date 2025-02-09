import productModel from "../Model/productModel.js";

// function to fetch all products (GET)

export async function getProducts(req, res) {
  try {
    const productData = await productModel.find();
    if (productData.length === 0) {
      return res
        .status(200)
        .json({ message: "There are no product data available" });
    }
    res.status(200).send(productData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server problem", error: err.message });
  }
}

// function to add a product to products database in mongodb (POST)

export async function saveProduct(req, res) {
  try {
    const { name, price, stock, description } = req.body;
    const newProduct = await productModel.create({
      name,
      price,
      stock,
      description,
    });
    res.status(201).send(newProduct);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

//  Function to get a single product through id (GET)

export async function getProductById(req, res) {
  try {
    const productId = req.params.id;
    const productDetails = await productModel.findById(productId);
    if (!productDetails) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).send(productDetails);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}
