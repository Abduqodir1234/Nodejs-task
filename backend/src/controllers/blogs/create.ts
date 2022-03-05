import Blogs from "@models/blogs";
import MainService from "@services/MainServices";
import { Response } from "express";

let create = async (req:any,res:Response) =>{
    let blogs = new MainService(Blogs)
    let {main,status} = await blogs.create(req.body)
    return res.status(status).json(main)
}

export default create;