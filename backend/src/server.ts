import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import transactionRouter from './router/transaction.router'

import { dbConnect } from './configs/database.config';
dbConnect();
const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))
app.use("/api/transaction", transactionRouter)

// app.get("/api/transaction", (req, res) => {
//     res.send(sample_transaction);
// })



// app.get("/api/transaction/:transactionId", (req, res) => {
//   const transactionId = req.params.transactionId;
//   const transaction = sample_transaction.find(transaction => transaction.id == transactionId);
//   res.send(transaction);
// })

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})