import { z } from "zod";

const signupInput = z.object({
    username: z.string(),
    password: z.string()
})

type SignupParams = z.infer<typeof signupInput>;