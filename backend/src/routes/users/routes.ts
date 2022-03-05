import { userCreate, userGet, userLogout } from "@controllers/users";
import Login from "@controllers/users/login";
import UserCreateValidation from "@joi_schema/users/create";
import LoginValidator from "@joi_schema/users/login";
import PhotoChecker from "@middlewares/PhotoChecker";
import verifyToken from "@middlewares/verifyToken";
import { Router } from "express";

let userRoutes = Router()

userRoutes.route('/register').post(PhotoChecker,UserCreateValidation,userCreate)

userRoutes.route('/login').post(LoginValidator,Login)
userRoutes.post('/logout',verifyToken,userLogout)
userRoutes.route('/profile/info').get(verifyToken,userGet)

export default userRoutes;