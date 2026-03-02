require("dotenv").config();
const app = require("./src/app.js");
const connectToDB = require("./src/config/database.js");

connectToDB();

app.listen(3000, () => {
  console.log("Server is listen on port 3000");
});
