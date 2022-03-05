import jwt from "jsonwebtoken"
const token_secret = process.env.TOKEN_SECRET || ''
const access_validity = process.env.ACCESS_VALIDITY || ''
let createToken = async (userId:any,sessionId:any)=>{
    try{
        const access_token = await jwt.sign(
            { user: userId,session:sessionId },
            token_secret,
            { expiresIn: access_validity }
          );
          return access_token;
    }
    catch{
        return ""
    }
}
export default createToken;