import { SessionDocument } from "@models/session";
import { UserDocument } from "@models/users";
import jwt from "jsonwebtoken"
import { configs } from "src/config";
// import {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRED_DURATION} from "./Variables";

let createRefreshToken =async (userId:any,sessionId:any) => {
    try{
        const access_token = await jwt.sign(
            { user: userId,session:sessionId },
            configs.jwtconfigs.token_secret,
            { expiresIn: configs.jwtconfigs.refresh_validity }
          );
          return access_token;
    }
    catch{
        return ""
    }
}
export default createRefreshToken