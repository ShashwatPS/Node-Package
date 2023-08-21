import { z } from "zod";

export const signupInput = z.object({
    username: z.string(),
    password: z.string()
})

export type SignupParams = z.infer<typeof signupInput>;

export function hello(a :string) : string{
    return "Hello my name is " + a;
}

export function greet(a :string){
    console.log("How's your day going "+a+" ?");
}

export function Tanish(){
    console.log("Hello how is it going Tanish");
}