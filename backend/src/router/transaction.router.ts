import {Router} from 'express';
import { sample_transaction } from '../data';
import asyncHandler from 'express-async-handler';
import { TransactionModel } from '../models/transaction.model';


const router = Router();
router.get("/seed", asyncHandler(
    async (req, res) => {
      
       const transactionsCount = await TransactionModel.countDocuments();
       if(transactionsCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await TransactionModel.create(sample_transaction);
       res.send("Seed Is Done!");
   }
   ))
 


router.get("/", (req, res) => {
    res.send(sample_transaction);
})



router.get("/:transactionId", (req, res) => {
    const transactionId = req.params.transactionId;
    const transaction = sample_transaction.find(transaction => transaction.id == transactionId);
    res.send(transaction);
  })

  router.put('/transactions/:id', (req, res) => {
    const transactionId = req.params.id;
    const updatedTransaction = req.body;
  
    const transaction = sample_transaction.find(transaction => transaction.id == transactionId);
  
    if (transaction) {
      transaction.Comments = updatedTransaction.comments;
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  });

export default router;