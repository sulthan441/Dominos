const mongoose = require('mongoose');

const config = require('../config/')
async function connect(){
    return new Promise((res,rej)=>{
        mongoose.connect(config.DB_CONNECTION_URL,(err)=>{
            if(err){
                console.log("error occured in connecting database")
                return rej(err)
            }
            console.log("database connected succesfully")
            res();
        })
    })
}
module.exports = connect;