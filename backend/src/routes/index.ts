import { Router } from "express";
import blogsRoutes from "./blogs/routes";
import userRoutes from "./users/routes";

const rootRouter = Router()


rootRouter.use('/user',userRoutes)
rootRouter.use('/blogs',blogsRoutes)

export default rootRouter;