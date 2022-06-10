// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(
  "ACcc1b911d47bfe1619df7d7820622199b",
  "335e7ec104730f3a3728466c74133e36"
);

client.messages
  .create({
    body: "Hi BB! What's your name? From Eileen",
    from: "+13022468623",
    to: "+16466712796",
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.error(err));
