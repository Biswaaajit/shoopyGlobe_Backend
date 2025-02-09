import { loginUser, registerUser } from "../Controller/userController.js";
import {
  loginMiddleware,
  registerMiddleware,
} from "../Middlewares/usersMiddleware.js";

function userRoutes(app) {
  app.post("/register", registerMiddleware, registerUser);
  app.post("/login", loginMiddleware, loginUser);
}
export default userRoutes;
