#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Define the directories and files to be created
const directories = ["src", "config", "controllers", "routes", "middlewares", "models", "utils"];
const files = {
  "app.js": `import express from "express";
import dotenv from "dotenv/config";
import dbConnect from "./config/dbConnect.js";
import cookieParser from "cookie-parser";

dbConnect();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import testRoute from "./routes/testRoute.js";
app.use("/api/test", testRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is running on PORT");
});`,

  "config/dbConnect.js": `import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connection successful!!");
    } catch (error) {
        console.log("Connection failure!!");
        process.exit(1);
    }
};

export default dbConnect;`,

  "controllers/testController.js": `const testController = (req, res) => {
    try {
        return res.status(200).json({ message: "It's working" });
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}

export { testController };`,

  "middlewares/.gitkeep": "",
  "models/.gitkeep": "",
  
  "routes/testRoute.js": `import { Router } from "express";
import { testController } from "../controllers/testController.js";

const router = Router();

router.get("/", testController);

export default router;`,

  "utils/.gitkeep": "",

  "package.json": `{
  "name": "@varunverma13/set-up-express",
  "version": "1.0.1",
  "description": "A setup for quickly creating an Express.js application",
  "main": "app.js",
    "bin": {
    "set-up-express": "./bin/setup.js"
  },
  "type": "module",
  "scripts": {
    "dev": "nodemon app.js"
  },
  "keywords": ["express", "setup", "nodejs", "middleware"],
  "author": "Varun Verma",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "https://github.com/varunv13/set-up-express.git"
  },
  "files": [
    "config/",
    "controllers/",
    "middlewares/",
    "models/",
    "routes/",
    "utils/",
    "app.js",
    "README.md"
  ],
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.0",
    "nodemon": "^3.1.9"
  }
}`
};

// Create directories
directories.forEach((dir) => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`Created directory: ${dir}`);
  }
});

// Create files
Object.keys(files).forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, files[file]);
    console.log(`Created file: ${file}`);
  }
});

console.log("Express setup complete!");
