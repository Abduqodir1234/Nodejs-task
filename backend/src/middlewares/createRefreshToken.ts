import jwt from "jsonwebtoken"
const token_secret = process.env.TOKEN_SECRET || ''

let createRefreshToken =async (user:any,session:any) => {
    try{
        const access_token = await jwt.sign(
            { user: user,session:session },
            token_secret,
            { expiresIn: process.env.REFRESH_VALIDITY }
          );
          return access_token;
    }
    catch{
        return ""
    }
}
export default createRefreshToken