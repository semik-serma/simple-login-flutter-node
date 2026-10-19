import mongoose, { mongo } from "mongoose";
import { errorResponse } from "../utils/response.js";

export const connectdb=()=>{
try {
    mongoose.connect('mongodb://semikserma:semikserma@ac-f6trjha-shard-00-00.dmkxhjw.mongodb.net:27017,ac-f6trjha-shard-00-01.dmkxhjw.mongodb.net:27017,ac-f6trjha-shard-00-02.dmkxhjw.mongodb.net:27017/?ssl=true&replicaSet=atlas-lhuy3v-shard-0&authSource=admin')
    console.log("database connected successfully")
} catch (error) {
    console.log('datbase failed to connect',error)
}
}