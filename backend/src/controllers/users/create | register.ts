import Users from "@models/users";
import MainService from "@services/MainServices";
import { Request, Response } from "express";

let create = async (req:Request,res:Response) =>{
    let user = new MainService(Users)
    let {status,main} = await user.get_or_create({email:req.body.email},req.body)
    res.status(status).json(main)
}

export default create;