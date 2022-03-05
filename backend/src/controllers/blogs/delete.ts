import Blogs from "@models/blogs"
import MainService from "@services/MainServices"
import { Response } from "express"

const Delete = async(req:any,res:Response)=>{
    let blog = new MainService(Blogs)
    let {id} = req.params
    let {user} = req
    let {main,status} = await blog.delete({userId:user.id,id})
    return res.status(status).json(main)


}
export default Delete;