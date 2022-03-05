import { DataTypes } from "sequelize";
import { db } from "src/config/db";
import Users from "./users";

let Blogs = db.define('blogs',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    short_desc:{
        type:DataTypes.STRING(1234),
        allowNull:false
    },
    photo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
})

Users.hasMany(Blogs)


export default Blogs;