import {
  getProductById,
  getProducts,
  saveProduct,
} from "../Controller/productController.js";

function productRoute(app) {
  app.get("/products", getProducts);
  app.get("/products/:id", getProductById);
  app.post("/product", saveProduct);
}

export default productRoute;
