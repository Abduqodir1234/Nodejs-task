import { SessionDocument } from "@models/session";
import { UserDocument } from "@models/users";
import jwt from "jsonwebtoken"
import { configs } from "src/config";
let createToken = async (userId:any,sessionId:any)=>{
    try{
        const access_token = await jwt.sign(
            { user: userId,session:sessionId },
            configs.jwtconfigs.token_secret,
            { expiresIn: configs.jwtconfigs.access_validity }
          );
          return access_token;
    }
    catch{
        return ""
    }
}
export default createToken;