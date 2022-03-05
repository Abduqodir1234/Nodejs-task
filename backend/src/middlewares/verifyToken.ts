import {NextFunction,Response} from "express";
import Decode from "./decode";
import ReIssueAccessToken from "./reIssueAccessToken";
import ErrorResponse from "@responses/ErrorResponse";

const verifyToken = async(req:any, res:Response, next:NextFunction) => {
    const access_token:any = req?.headers["authorization"]?.replace(/^Bearer\s/,"")
    let refresh_token:any = req.headers["refresh"]
    if (access_token){
        let data:any = await Decode(access_token)
        if(data?.expired === false) {
            console.log("data",data)
            req.user = data.decoded.user ? data.decoded.user : data.decoded.username
            next()
        }
        else if(data?.expired && refresh_token){
            let newAccessToken:any = await ReIssueAccessToken(refresh_token)
            if(newAccessToken){
                res.setHeader("x-access-token",newAccessToken)
                let data:any = await Decode(newAccessToken)
                console.log('access',data)
                req.user = data?.decoded?.user ? data?.decoded?.user : data?.decoded?.username
                next();
            }
            else{
                ErrorResponse(res,"Authentication Error2")
            }
        }
        else{
            ErrorResponse(res,"Authentication Error3")
        }
    }
    else{
        ErrorResponse(res,"Authentication Error")
    }


}

export default verifyToken;