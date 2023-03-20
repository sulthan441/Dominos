const mongoose = require('mongoose');

const config = require('../config/')
async function connect(){
    return new Promise((res,rej)=>{
        mongoose.connect()
    })
}