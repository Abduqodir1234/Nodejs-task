import Blogs from "@models/blogs";
import MainService from "@services/MainServices";
import { Response } from "express";
import { configs } from "src/config";

let PersonalBlogs = async(req:any,res:Response)=>{
    let blog = new MainService(Blogs)
    let {user,query:{page}} = req
    let {main,status} = await blog.findAll({userId:user.id},page || 1,configs.blogsConfig.limit)
    return res.status(status).json(main)
}
export default PersonalBlogs