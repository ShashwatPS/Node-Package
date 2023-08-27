This repository contains a custom Node.js package created by me, which provides utility functions and types for various tasks. The package can be easily installed using npm and offers functionalities that can simplify your development process.

## Installation
To install the package, simply run the following command in your project directory:

```
npm install @shashwat_ps/common
```

## Purpose
I've created this repository as a learning project to gain insights into the process of developing and deploying a Node.js package. The included package offers basic utility functions and type definitions that can be used to understand fundamental concepts and enhance your understanding of package creation and deployment.

## Usage
Once installed, you can import and use the functions and types provided by the package. Here's an overview of what this package offers:

### `signupInput`
This is a Zod schema that represents the input structure for user signup. It ensures that the input contains a username and a password, both of which are expected to be strings.

```
import { signupInput } from "@shashwat_ps/common";

// Example usage
const userInput = {
  username: "exampleUser",
  password: "securePassword"
};

const validationResult = signupInput.safeParse(userInput);
if (validationResult.success) {
  // Input is valid
} else {
  // Handle validation errors
}
```

### `hello`
This function takes a string parameter and returns a greeting message that includes the provided name.
```
import { hello } from "@shashwat_ps/common";

const greeting = hello("Shashwat");
console.log(greeting); // Outputs: "Hello my name is Shashwat"
```

### `greet`
This function takes a string parameter and logs a friendly message to the console.
```
import { greet } from "@shashwat_ps/common";

greet("Stranger"); // Outputs: "How's your day going Stranger?"
```

### `Tanish`
This function logs a message to the console.
```
import { Tanish } from "@shashwat_ps/common";

Tanish(); // Outputs: "Hello how is it going Tanish"
//Tanish is one of my friends btw.

```

### `Fixing Error`
If you encounter any errors related to ES Modules, make sure you have added "type": "module" to your package.json 
file. Also, ensure that you are using Node.js version 14 or higher.

```
{
  "name": "your-project",
  "version": "1.0.0",
  "type": "module", // Add this line for fixing the error
  "main": "index.js", // Entry point for CommonJS modules (optional)
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    // your dependencies here
  }
}
```

Feel free to explore and incorporate these functions and types into your projects to enhance your development experience.
