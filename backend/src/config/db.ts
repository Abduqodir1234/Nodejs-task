import {Sequelize} from "sequelize";
import { configs } from ".";

let {db_name,db_pass,db_user} = configs.dbconfig
export const db = new Sequelize(db_name,db_user,db_pass,{...configs.dbconfig,dialect:'postgres'})

let connectDB = async () =>{
    try{
        db.authenticate()
        db.sync()  
        return {error:false,msg:'Database connected and synchonized'}
    }
    catch(e:any){
        return {error:true,msg:e}
    }
}
export default connectDB
