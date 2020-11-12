import * as mongoose from 'mongoose';

export const UserSchema =  new mongoose.Schema({
    username: String,
    password: String,
    orderCount: Number
})

export interface Users {
    id: string,
    username: string,
    password: string,
    orderCount:number 
}