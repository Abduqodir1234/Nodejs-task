import ErrorResponse from "@responses/ErrorResponse";
import { NextFunction, Request, Response } from "express";
import upload from "./file.upload";

let PhotoArrayChecker = async(
    req:any,
    res:Response,
    next:NextFunction
)=>{
    await upload.array("photo")(req,res,async(err:any)=>{
        if(err)
            ErrorResponse(res,err);
        else
            next();
    })
}


export default PhotoArrayChecker;