import ResponseData from "@responses/ResponseWithDataStructure";
import { Response } from "express";

let get = (req:any,res:Response)=>{
    return res.json({error:false,data:req.user})
}
export default get;