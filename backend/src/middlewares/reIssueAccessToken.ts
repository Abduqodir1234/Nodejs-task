import Decode from "./decode";
import createToken from "./createToken";
import Session from "@models/session";
import Users, { UserDocument } from "@models/users";

let ReIssueAccessToken = async (token:string)=>{
    let data:any =await Decode(token)
    let id:any = data?.decoded
    if(!data.valid || !id)
        return false
    else{
        let session: any =await Session.findOne({where:{id:data.decoded.session.id}});
        if(!session || !session?.valid)
            return false
        else{
            let user:any =await Users.findOne({where:{id:session.userId}});
            if(!user)
                return false
            else{
                let access_token = await createToken(user,session)
                return access_token
            }
        }
    }
}
export default  ReIssueAccessToken;