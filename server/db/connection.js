// getting-started.js
const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.URI;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(URI);
    console.log(" connect to db..");
  } catch (error) {
    console.log("unable to connect db..", error.message);
  }
}
