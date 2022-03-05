import checkPassword from "@middlewares/checkPassword";
import createRefreshToken from "@middlewares/createRefreshToken";
import createToken from "@middlewares/createToken";
import Session from "@models/session";
import Users from "@models/users";
import ErrorResponseStructure from "@responses/ErrorResponseStructure";
import ResponseData from "@responses/ResponseWithDataStructure";

class UserService {
    async login(data:any){
        let user:any = await Users.findOne({where:{email:data.email}})
        if(!user){return ErrorResponseStructure('no user with this email')}
        let ans = await checkPassword(user.password,data.password)
        if(!ans?.match){return ErrorResponseStructure('password not corrrect')}
        else{
            let session:any = await Session.findOrCreate({where:{userId:user.id,valid:true}})
            const token = await createToken(user,session[0].dataValues)
            let refresh = await createRefreshToken(user,session[0].dataValues)
            return ResponseData({"access_token":token,"refresh_token":refresh})
        }
    }
}
export default UserService