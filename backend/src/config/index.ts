export const configs = {
    //Db Config

    dbconfig:{
        db_name:"test1",
        db_user:"root",
        db_pass:"1242",
        host:'localhost',
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        },
    },


    //JWT configs

    jwtconfigs:{
        token_secret:'alskfd23asdf4lasdf+kjwl6456543346weqr6834q2r+/**/-589+985+6985wek',
        access_validity:'1m',
        refresh_validity:'30d'
    },

    blogsConfig:{
        limit:10
    }


}