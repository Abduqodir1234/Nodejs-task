import ErrorResponse from "@responses/ErrorResponse";
import { NextFunction, Request, Response } from "express";
import upload from "./file.upload";

let PhotoChecker = async(
    req:any,
    res:Response,
    next:NextFunction
    )=>{
    await upload.single("photo")(req,res,async(err)=>{
        if(err)
            ErrorResponse(res,err.message,200);
        else
            next();
    })
}


export default PhotoChecker;