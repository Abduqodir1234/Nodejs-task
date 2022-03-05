import Session from "@models/session";
import MainService from "@services/MainServices";
import { Response } from "express";

let logout =async (req:any,res:Response)=>{
    let sessions = new MainService(Session)
    let {id} = req?.user
    let {main,status} = await sessions.update({userId:id,valid:true},{valid:false})
    return res.status(status).json(main)
}
export default logout;