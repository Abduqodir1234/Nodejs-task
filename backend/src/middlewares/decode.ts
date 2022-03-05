import jwt from "jsonwebtoken";
import { configs } from "src/config";


let Decode= async (token:string)=>{
    try{
       let decoded = await jwt.verify(token,configs.jwtconfigs.token_secret);
       return {valid:true,expired:false,decoded};
    }
    catch(e:any){
        return{
            valid:false,
            expired:true,
            decoded:null
        }
    }
}
export default Decode;