import { Response } from "express";
import SuccessResponseStructure from "./successResponseStructure";

let SuccessResponse = (res:Response,msg:any,status=200)=>{
    return res.status(status).json({error:false,msg:msg})
}
export default SuccessResponse;