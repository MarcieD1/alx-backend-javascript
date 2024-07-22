Node.js Basics Project

##Learning Objective##s
By completing this project, you will gain proficiency in the following areas without needing external references:

-Running JavaScript using Node.js
-Utilizing Node.js modules effectively
-Using specific Node.js modules to read files
-Accessing command line arguments and environment variables using process
-Creating a small HTTP server using Node.js
-Building a small HTTP server using Express.js
-Creating advanced routes with Express.js
-Using ES6 features with Node.js via Babel-node
-Utilizing Nodemon for faster development

##Requirements##
-Allowed editors: vi, vim, emacs, Visual Studio Code
-All files must be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x)
-All files should end with a new line
-A README.md file, located at the root of the project folder, is mandatory
-JavaScript files should use the .js extension
-Code tested using Jest with the command npm run test
-Code verified against lint using ESLint (npm run lint)
-Entire project validation via npm run full-test
-Export functions/classes using module.exports = myFunction;

##Provided Files##

-database.csv: Contains data for student records.
-package.json: Configuration file specifying project details and dependencies.
-babel.config.js: Babel configuration file.
-.eslintrc.js: ESLint configuration file.
-Additional task-specific JavaScript files.

##Tasks##
1.Executing basic JavaScript with Node.js
Implement a function to display a message to STDOUT.

2.Using Process stdin
Create a program that interacts with the user via command line input.

3.Reading a file synchronously with Node.js
Implement a function to read and process a CSV file synchronously.

4.Reading a file asynchronously with Node.js
Implement a function to read and process a CSV file asynchronously using Promises.

5.Creating a small HTTP server using Node's HTTP module
Build a basic HTTP server that responds with "Hello Holberton School!" for any endpoint.

##Project Structure##
The project is structured into multiple directories corresponding to each task, adhering to the guidelines and best practices for Node.js development.

##Setup Instructions##
Clone the repository from GitHub.
Navigate to the project directory.
Run npm install to install dependencies specified in package.json.

##Running Tests##
Use npm run test to execute Jest tests.
Use npm run lint to check code against ESLint rules.
Use npm run full-test to validate the entire project.

##Repository##
GitHub Repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic

##Files##
0-console.js: Implementation of basic JavaScript execution.
1-stdin.js: Program utilizing process.stdin for user interaction.
2-read_file.js: Function to read and process a CSV file synchronously.
3-read_file_async.js: Function to read and process a CSV file asynchronously.
4-http.js: Implementation of a small HTTP server using Node's HTTP module.

