import mongoose, {Schema, model} from 'mongoose';

export interface Transactionone {
    id: string;
    date: number;
    Amount: number;
    CurrencyCd: string;
    Comments: string;
    status: string;
  }
  
 
  
  export const TransactionSchema = new Schema<Transactionone>(
    {
        date: { type: Number, required: true },
        Amount: { type: Number, required: true },
        CurrencyCd: { type: String, required: true },
        Comments: { type: String, required: true },
        status: { type: String, required: true }
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const TransactionModel = model<Transactionone>('transaction', TransactionSchema);