const express = require("express");
// const axios = require('axios').default;
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");
require("dotenv").config();
const db = require("../server/db/db-connection.js");
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");
const app = express();
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

//creates an endpoint for the route /api

app.get("/", (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});
app.post("api/sms", cors(), (req, res) => {
  const phoneNumber = "+" + req.body.phoneNumber;
  const client = require("twilio")(accountSid, authToken);
  const URL =
    "https://studio.twilio.com/v2/Flows/FW3c14edd22e198a8fc7e25d1e28067f12/Executions";

  client.studio
    .flows("FW3c14edd22e198a8fc7e25d1e28067f12")
    .executions.create({
      to: twilioPhone,
      from: phoneNumber,
    })
    .then((execution) => console.log(execution.sid))
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.error(err);
      res.send(JSON.stringify({ success: false }));
    });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
