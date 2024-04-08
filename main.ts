#!/usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";
let currencyConversion={
    "PKR":{
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR":1,
    },
    "GBP":
    {
        "USD": 1.26,
        "GBP": 1,
        "PKR": 350.76,
    },
    "USD":{
        "PKR":277.54 , 
         "GBP": 0.79,
        "USD": 1,
        "EUR" :0.91,
        "INR":0.91
    },
};
///Prompt user for input
const answer:{
    from:"PKR"|"GBP"|"USD",
    to:"PKR"|"GBP"|"USD",
    amount:number,

}
=await inquirer.prompt(
    [
        {
            type:"list",
            name:"from",
            message:"Please select your  currency?",
            choices:["PKR","GBP","USD","EUR","INR"],
        },
        {
            type:"list",
            name:"to",
            message:"Select your conversion rate",
            choices:["PKR","GBP","USD","EUR","INR"

            ],
        },
        {
            type:"number",
            name:"amount",
            message:"Enter the amount you wish to convert",
            
        }
    ]);
    ///Destructing user input
    const{from,to,amount}=answer;
    ///perform currency conversion
    if(from && to && amount)
        {
            let result =currencyConversion[from][to]*amount;
            console.log(`Your Conversion from ${from}to ${to}is ${result}`);

        }else{
            console.log("Invalid Conversion");
            
        }

