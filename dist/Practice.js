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
let ans = (0, common_1.hello)("Shashwat Singh");
console.log(ans);
(0, common_1.greet)("Shashwat");
(0, common_1.Tanish)();
