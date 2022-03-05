import ErrorResponse from "@responses/ErrorResponse";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

let loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})


const LoginValidator = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await loginSchema.validateAsync(req.body)
        next()
    }
    catch(e){
        return ErrorResponse(res,e)
    }
}

export default LoginValidator;