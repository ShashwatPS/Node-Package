import {signupInput} from "@shashwat_ps/common";

let username : string = "Shashwat Singh";
let password =  12345;

let parsedInput = signupInput.safeParse({username,password});

if(!parsedInput.success){
    console.log("Error Parsing");
}

else{
    console.log("Types Passed are Correct");
}

