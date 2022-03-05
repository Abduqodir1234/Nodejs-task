import Blogs from "@models/blogs"
import MainService from "@services/MainServices"
import { Request, Response } from "express"

const get = async (req:Request,res:Response) => {
    let blogs = new MainService(Blogs)
    let {id} = req.params
    let {main,status} = await blogs.findOne({id:id})
    res.status(status).json(main)
}
export default get;