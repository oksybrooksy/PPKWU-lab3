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
      const message = await response.text();
      console.log(message);
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
