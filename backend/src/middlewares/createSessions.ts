import { UserDocument } from "../Models/Users"
import Sessions,{SessionDocument} from "../Models/Session"
let CreateSession = async(userId:SessionDocument["user"],userAgent:SessionDocument["userAgent"]) =>{
    let session:any = await Sessions.create({user:userId,userAgent:userAgent})
    return session
}
export default CreateSession