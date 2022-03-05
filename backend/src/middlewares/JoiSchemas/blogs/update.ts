import ErrorResponse from "@responses/ErrorResponse";
import { NextFunction, Response } from "express";
import Joi from "joi";

let create_validation = Joi.object({
    title:Joi.string().required(),
    short_desc:Joi.string().required(),
    description:Joi.string().required(),
})


let BlogUpdateValidation = async (req:any,res:Response,next:NextFunction)=>{
    try{
        await create_validation.validateAsync(req.body)
        if(req?.file?.path){req.body.photo = req.file.path}
        next()
    }
    catch(e:any){
        return ErrorResponse(res,e.message)
    }
}

export default BlogUpdateValidation;