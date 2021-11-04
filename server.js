const express = require("express");
const app = express();
port = 3001;
host = "localhost";

app.listen(port, host, (error) => {
  if (error) {
    console.log("There was an error while running the server.");
  } else {
    console.log(`Server started at port ${port}`);
  }
});
