import fetch from "node-fetch";
// const fetch = require("node-fetch");
import express from "express";
// const express = require("express");
const app = express();
const port = 3001;
const host = "localhost";
app.use(express.json());

app.listen(port, host, (error) => {
  if (error) {
    console.log("There was an error while running the server.");
  } else {
    console.log(`Server started at port ${port}`);
  }
});

app.get("/format", async (req, res) => {
  const format = req.query.format;
  const text = req.query.text;
  if (format === "json") {
    try {
      const response = await fetch(
        `http://localhost:8080/CapitalLetters?text=${text}`
      );
      const response2 = await fetch(
        `http://localhost:8080//lowercaseLetters?text=${text}`
      );
      const response3 = await fetch(
        `http://localhost:8080/digits?text=${text}`
      );
      const response4 = await fetch(
        `http://localhost:8080/specialCharacters?text=${text}`
      );

      const message = await response.text();
      const message2 = await response2.text();
      const message3 = await response3.text();
      const message4 = await response4.text();

      return res.status(200).json({ message, message2, message3, message4 });
    } catch (error) {
      console.error(error);
    }
  } else if (format === "xml") {
  } else if (format === "csv") {
  } else {
    return res.status(400).send("Incorrect format");
  }

  return res.status(200).send("success");
});
