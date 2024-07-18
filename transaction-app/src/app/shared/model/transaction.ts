export class Transaction {
    id!: string;
    date!: number;
    sender: Person | undefined;
    recipient!: Recipient;
    Amount!: number;
    CurrencyCd!: string;
    Comments!: string;
    status!: string;
  }
  
  interface Person {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    IDNumber: string;
  }
  
  interface Recipient {
    firstName: string;
    lastName: string;
    email: string;
    accountNumber: string;
    bank: string;
  }