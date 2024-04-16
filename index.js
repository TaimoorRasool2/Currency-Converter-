#!/usr/bin/env ts-node 
import inquirer from "inquirer";
const currencyValue = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        message: "convert currency from",
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        message: "convert currency to",
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        message: "Amount to be converted",
        name: "amount",
        type: "number",
    }
]);
// let convertValue:number=NaN;
// if(userAnswer.from==="USD"){
//    convertValue= userAnswer.amount/currencyValue.USD;
// }
// else if(userAnswer.from==="EUR"){
//     convertValue= userAnswer.amount/currencyValue.EUR;
// }
// else if(userAnswer.from==="GBP"){
//     convertValue= userAnswer.amount/ currencyValue.GBP;
// }
// else if(userAnswer.from==="INR"){
//     convertValue= userAnswer.amount/currencyValue.INR;
// }
// else if(userAnswer.from==="PKR"){
//     convertValue= userAnswer.amount/currencyValue.PKR;
// }
// let finalValue:number=NaN;
// if(userAnswer.to==="USD"){
//     finalValue= convertValue * currencyValue.USD;
//  } 
//  else if(userAnswer.to==="EUR"){
//      finalValue= convertValue*currencyValue.EUR;
//  }
//  else if(userAnswer.to==="GBP"){
//      finalValue= convertValue *currencyValue.GBP;
//  }
//  else if(userAnswer.to==="INR"){
//      finalValue= convertValue * currencyValue.INR;
//  }
//  else if(userAnswer.to==="PKR"){
//      finalValue= convertValue*currencyValue.PKR;
//  }
let amountFrom = currencyValue[userAnswer.from];
let amountTo = currencyValue[userAnswer.to];
let convertedValue = userAnswer.amount / amountFrom;
let finalValue = convertedValue * amountTo;
console.log(`The amount converted from ${userAnswer.from} to ${userAnswer.to} and the value is ${finalValue}`);
