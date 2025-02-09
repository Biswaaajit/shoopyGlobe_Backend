import {
  addProduct,
  deleteProduct,
  updateCart,
} from "../Controller/cartController.js";
import {
  addProductMiddleware,
  cartMiddleware,
} from "../Middlewares/cartMiddleware.js";

function cartRoutes(cartRouter) {
  cartRouter.use(cartMiddleware);
  cartRouter.post("/", addProductMiddleware, addProduct);
  cartRouter.put("/:id", updateCart);
  cartRouter.delete("/:id", deleteProduct);
}

export default cartRoutes;
