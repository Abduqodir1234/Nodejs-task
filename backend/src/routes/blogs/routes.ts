import { 
    blogCreate, 
    blogDelete, 
    blogGetById, 
    blogsList, 
    blogUpdate, 
    personalBlogs 
} from "@controllers/blogs";
import BlogCreateValidation from "@joi_schema/blogs/create";
import BlogUpdateValidation from "@joi_schema/blogs/update";
import PhotoChecker from "@middlewares/PhotoChecker";
import verifyToken from "@middlewares/verifyToken";
import { Router } from "express";

let blogsRoutes = Router()


blogsRoutes.route('/').post(verifyToken,PhotoChecker,BlogCreateValidation,blogCreate)
    .get(verifyToken,personalBlogs)
blogsRoutes.route("/list").get(blogsList)

blogsRoutes.route("/:id").delete(verifyToken,blogDelete).patch(verifyToken,PhotoChecker,BlogUpdateValidation,blogUpdate).get(blogGetById)


export default blogsRoutes;