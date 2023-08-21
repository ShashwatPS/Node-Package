"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@shashwat_ps/common");
let username = "Shashwat Singh";
let password = 12345;
let parsedInput = common_1.signupInput.safeParse({ username, password });
if (!parsedInput.success) {
    console.log("Error Parsing");
}
else {
    console.log("Types Passed are Correct");
}
