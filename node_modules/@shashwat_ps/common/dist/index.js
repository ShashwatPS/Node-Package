"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tanish = exports.greet = exports.hello = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
function hello(a) {
    return "Hello my name is " + a;
}
exports.hello = hello;
function greet(a) {
    console.log("How's your day going " + a + " ?");
}
exports.greet = greet;
function Tanish() {
    console.log("Padhle bhai 70 Hazar ka laptop liya hai");
}
exports.Tanish = Tanish;
