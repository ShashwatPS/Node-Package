import {signupInput,hello,greet,Tanish} from "@shashwat_ps/common";

let username : string = "Shashwat Singh";
let password =  12345;

let parsedInput = signupInput.safeParse({username,password});

if(!parsedInput.success){
    console.log("Error Parsing");
}

else{
    console.log("Types Passed are Correct");
}

let ans : string = hello("Shashwat Singh");
console.log(ans);

greet("Shashwat");
Tanish();




