import express from 'express';
import { ENV } from "./lib/env.js";
import path from "path";

const app = express();

const __dirname = path.resolve();

console.log(`PORT: ${process.env.PORT}`);
console.log(`DB_URL: ${process.env.DB_URL}`);

app.get('/health', (req, res) => {
    res.status(200).json({"msg": "api is up and running"});
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(3000, () => {console.log("Server is running on port 3000")});

// console.log("Server is running...");