import checkPassword from "@middlewares/checkPassword";
import createToken from "@middlewares/createToken";
import Session from "@models/session";
import Users, { UserDocument } from "@models/users";
import MainService from "@services/MainServices";
import UserService from "@services/UserService";
import { Request, Response } from "express";

let Login = async (req:Request,res:Response)=>{
    let users = new UserService()
    let {main,status} = await users.login(req.body)
    return res.status(status).json(main)
    
}
export default Login