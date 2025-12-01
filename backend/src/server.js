import express from 'express';
import { ENV } from "./lib/env.js";

const app = express();

console.log(`PORT: ${process.env.PORT}`);
console.log(`DB_URL: ${process.env.DB_URL}`);

app.get('/health', (req, res) => {
    res.status(200).json({"msg": "api is up and running"});
});

app.listen(3000, () => {console.log("Server is running on port 3000")});

// console.log("Server is running...");