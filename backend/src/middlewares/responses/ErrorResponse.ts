import { Response } from "express";
import ErrorResponseStructure from "./ErrorResponseStructure";

let ErrorResponse = (res:Response,msg:any,status=400)=>{
    return res.status(status).json({error:true,msg:msg})
}
export default ErrorResponse;