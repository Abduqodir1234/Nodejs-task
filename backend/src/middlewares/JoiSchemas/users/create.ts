import joi from 'joi'
import {NextFunction, Response} from 'express'
import ErrorResponse from '@responses/ErrorResponse'
let user_create_validation = joi.object({
    email:joi.string()
        .email()
        .required(),
    password:joi.string()
        .min(6)
        .required(),
    fullname:joi.string().required()
})



const UserCreateValidation =async (req:any,res:Response,next:NextFunction)=>{
    try{
        await user_create_validation.validateAsync(req.body)
        if(req?.file?.path){req.body.photo = req.file.path}
        next()
    }
    catch(e:any){
        return ErrorResponse(res,e.message)
    }
}

export default UserCreateValidation;