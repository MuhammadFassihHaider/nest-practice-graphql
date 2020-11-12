import * as mongoose from 'mongoose';

export const  StoreSchema =  new mongoose.Schema({
    userID: String,
    productID: String,
    count: Number,
    limit: Number
})


export interface Store{
    readonly id: string,
    readonly userID: string,
    readonly productID: string,
    readonly count: number,
    readonly limit: number
}