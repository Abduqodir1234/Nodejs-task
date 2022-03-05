import Blogs from "@models/blogs";
import MainService from "@services/MainServices";
import { Response } from "express";

let update = async(req:any,res:Response)=>{
    let blog = new MainService(Blogs)
    let {user,params:{id}} = req
    let {status,main} = await blog.update({userId:user.id,id},req.body)
    res.status(status).json(main)
}

export default update