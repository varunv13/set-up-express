# Set-Up Express

A simple setup to quickly create an Express.js application with a predefined folder structure, essential configurations, and common middleware.

## Features

- Automatically creates the required project structure:
  - `src/`, `config/`, `controllers/`, `routes/`, `middlewares/`, `models/`, `utils/`
- Preconfigured with:
  - Express.js
  - Mongoose (for MongoDB integration)
  - Cookie Parser
  - dotenv for environment variable management
- Automatically creates `app.js`, `dbConnect.js`, a sample controller, routes, and more.
- Designed for rapid application bootstrapping.

## Installation

Instead of manually setting up your project, use this package to automatically generate the structure with the required configurations.

### Using npx (Recommended)

Run the following command to install and set up your Express app:

```bash
npx @varunverma13/set-up-express
```

This command will install the package and automatically generate the necessary folders, files, and configurations in your current directory.

## Note:

Using npx is recommended because it automatically executes the setup and creates the project structure for you.

## Usage

Once the setup script has finished running, you will have a fully functional Express app ready to go!

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

This will start the Express server, and you'll be able to access it on http://localhost:3001 (or the port you set in the .env file).

### Configuration

.env file: Create a .env file in the root directory and define your environment variables:

.env
PORT=3001
CONNECTION_STRING=<Your MongoDB connection string here>
Other configurations: Feel free to modify or extend the existing files based on your project requirements.

If you find this setup useful, consider starring the repository on GitHub and sharing it with others!
