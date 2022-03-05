import ErrorResponseStructure from "@responses/ErrorResponseStructure"
import ResponseData from "@responses/ResponseWithDataStructure"
import SuccessResponseStructure from "@responses/successResponseStructure"
import { where } from "sequelize/types"

class MainService{
    model:any
    constructor(model:any){
        this.model = model
    }

    async create(data:object){
        try{
            await this.model.create(data) 
            return SuccessResponseStructure('Created',201)
        }
        catch(e:any){
            return ErrorResponseStructure(e.message)
        }
    }

    async get_or_create(data_for_filter:object,data_for_create:object){
        try{
            let data = await this.model.findOrCreate({where:data_for_filter,defaults:data_for_create})
            if(data[1])
                return SuccessResponseStructure('Created',201)
            else
                return ErrorResponseStructure('User with this email already exists',200)
        }
        catch(e:any){
            return ErrorResponseStructure(e,200)
        }
    }


    async get_or_create2(data_for_filter:object,data_for_create:object){
        try{
            let data = await this.model.findOrCreate({where:data_for_filter,defaults:data_for_create})
            return ResponseData(data)
        }
        catch(e:any){
            return ErrorResponseStructure(e)
        }
    }

    async findOne(data_for_filter:object){
        let data = await this.model.findOne({where:data_for_filter})
        if(!data){
            return ErrorResponseStructure('No data with this search')
        }
        else{
            return ResponseData(data)
        }
        
    }


    async findAll(query={},page:number,limit:number){
        try{
            let data = await this.model.findAndCountAll({where:query,offset:(page-1)*limit,limit})
            data.limit = limit
            return ResponseData(data)
        }
        catch(e:any){
            return ErrorResponseStructure(e.message)
        }
    }



    async find(query:any,page:number,limit:number){
        try{
            let data = await this.model.find({where:query,offset:(page-1)*limit,limit})
            
            return ResponseData(data)
        }
        catch(e:any){
            return ErrorResponseStructure(e.message)
        }
    }

    async delete(query:object){
        try{
            let data = await this.model.destroy({where:query})
            if(data === 0){
                return ErrorResponseStructure('You donot have any blogs with this id',404)
            }
            return SuccessResponseStructure('Deleted')
        }
        catch(e:any){
            return ErrorResponseStructure(e.message)
        }
    }



    async update(query:object,date_for_update:object){
        try{
            let data = await this.model.update(date_for_update,{where:query})
            if(data[0] === 0)
                return ErrorResponseStructure('No blog with this id',404)
            else
                return SuccessResponseStructure('Updated')
        }
        catch(e:any){
            return ErrorResponseStructure(e.message)
        }
    }


}

export default MainService;