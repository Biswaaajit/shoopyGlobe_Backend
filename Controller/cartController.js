import cartModel from "../Model/cartModel.js";

// function to add product to the cart (POST)

export async function addProduct(req, res) {
  try {
    const { id, quantities } = req.body;
    const product = await cartModel.create({
      _id: id,
      quantities,
    });
    res.status(201).send(product);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server problem", error: err.message });
  }
}

// function update product's quantities in cart through their id (PUT)

export async function updateCart(req, res) {
  try {
    const productId = req.params.id;
    const newData = req.body;
    const updateData = await cartModel.findByIdAndUpdate(productId, newData, {
      new: true,
    });
    if (!updateData) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(201).json({ updateData });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server problem", error: err.message });
  }
}

// function to delete a product from cart using its ID (DELETE)

export async function deleteProduct(req, res) {
  try {
    const productId = req.params.id;
    const deletedData = await cartModel.findByIdAndDelete(productId);
    if (!deletedData) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Deleted successfully", deletedData });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server problem", error: err.message });
  }
}
