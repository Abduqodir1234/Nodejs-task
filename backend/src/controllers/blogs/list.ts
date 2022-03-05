import Blogs from "@models/blogs";
import MainService from "@services/MainServices";
import { Response } from "express";
import { configs } from "src/config";

let list = async(req:any,res:Response)=>{
    let {page} = req.query
    let {limit} = configs.blogsConfig
    let blog = new MainService(Blogs)
    let {main,status} = await blog.findAll({},page || 1,limit)
    return res.status(status).json(main)
}

export default list;