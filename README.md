### Express-Mongodb-Starter

#### Project Overview
This project is a basic setup for a Node.js application with Express.js and MongoDB. It includes configuration files, scripts for linting, formatting, and building the project, as well as the main application files.

#### File Structure
first-project/
│
├── src/
│ ├── app/
│ │ ├── app.ts
│ │ └── config/
│ │ └── index.ts
│ ├── server.ts
│ └── ...
│
├── .env
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├── package.json
├── tsconfig.json
└── ...

#### Explanation

- **src/**: This directory contains the source code of the application.
  - **app/**: Contains the main application logic.
    - **app.ts**: Initializes an Express application, sets up middleware, and defines routes.
    - **config/**: Contains configuration files.
      - **index.ts**: Loads environment variables using dotenv and exports configuration options such as port number and database URL.
  - **server.ts**: Entry point of the application, connects to the database and starts the server.

#### Configuration Files

- **.env**: Stores environment variables like PORT and DATABASE_URL.
- **.eslintignore**: Specifies files and directories to ignore during linting.
- **.eslintrc.json**: Configures ESLint rules for linting TypeScript files.
- **.gitignore**: Specifies files and directories to ignore in Git.
- **.prettierrc.json**: Configures Prettier for code formatting.
- **eslint.config.mjs**: ESLint configuration file using ECMAScript modules.
- **package.json**: Defines project metadata, dependencies, and scripts.
- **tsconfig.json**: TypeScript compiler configuration.

#### Dependencies

- **dotenv**: Loads environment variables from .env file.
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.

#### Scripts

- **build**: Compiles TypeScript files to JavaScript.
- **test**: Placeholder script for running tests.
- **lint**: Lints TypeScript files using ESLint.
- **lint:fix**: Automatically fixes linting errors.
- **prettier**: Formats TypeScript, JavaScript, and JSON files using Prettier.
- **Prittier:fix**: Fixes formatting issues in source files.

#### Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Create a .env file and define environment variables.
4. Build the project: `npm run build`
5. Start the server: `npm start`
