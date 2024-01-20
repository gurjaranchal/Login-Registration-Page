const mongoose = require('mongoose');
const connectdb = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mydb');
        console.log('Connection sucessfull to mongodb');
    }
    catch(e){
        console.log("error",e);
    }
}
module.exports = connectdb;