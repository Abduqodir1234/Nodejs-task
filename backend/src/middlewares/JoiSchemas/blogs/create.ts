import ErrorResponse from "@responses/ErrorResponse";
import { NextFunction, Response } from "express";
import Joi from "joi";

let create_validation = Joi.object({
    title:Joi.string().required(),
    short_desc:Joi.string().required(),
    description:Joi.string().required(),
})


let BlogCreateValidation = async (req:any,res:Response,next:NextFunction)=>{
    try{
        await create_validation.validateAsync(req.body)
        req.body.userId = req.user.id
        if(req?.file?.path){req.body.photo = req.file.path}
        else{return ErrorResponse(res,'photo is required')}
        next()
    }
    catch(e:any){
        return ErrorResponse(res,e.message)
    }
}

export default BlogCreateValidation