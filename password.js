const { config } = require('process');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var password = 10

reader.question("Welcome to the password validator! Please enter your password.", function(input){

    password = input[10];
    
     if(password >= input[10])
        console.log("Your password is valid")

     else {
        console.log("Please use at least 10 characters and try again")
    }
    
    
  reader.close()

} );