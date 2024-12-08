import express from "express";

// Import the mongoose module for working with MongoBD
import mongoose from "mongoose";

// Import "dotenv" for environment variables
import dotenv from "dotenv";

import createPlayerRoute from "./routes/createPlayer.js";

dotenv.config();

// Define the port number where the server will listen for requests
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
const mongoURI = process.env.MONGO_URI;

// Connection to MongoDB
async function main() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connection Successful");
  } catch (error) {
    console.log("Unable to connect" + error);
  }
}

main();

// Main URL => http://localhost:3000/api/player
app.use('/api/player', createPlayerRoute);

app.get('/', (req, res) => {
  res.send('Just to test if this is working :D')
});

app
  .listen(port, () => {
    console.log(`Application URL: http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Server loading error:", err);
    process.exit(1);
  });