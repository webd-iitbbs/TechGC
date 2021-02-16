const { google } = require("googleapis");
// const util = require('./utility');

const client_email = process.env.CLIENT_EMAIL;
const private_key = process.env.PRIVATE_KEY;
// Google CLient
const gClient = new google.auth.JWT(client_email, null, private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

// Authorizer - Google Client
gClientAuthorize = (gClient) => {
  console.log("Authorizing...");
  console.log(client_email, private_key);
  // console.log(process.env.CLIENT_EMAIL, process.env.PRIVATE_KEY);
  gClient.authorize((err) => {
    if (err) throw err;
    console.log("Connected!");
  });
};

gsrun = async (cl) => {
  console.log("Fetching latest data...");
  gsapi = google.sheets({ version: "v4", auth: cl });
  var opt = {
    spreadsheetId: "1zaMIy-zKbrKlO4Vt7fVLupUKcnoEdyd1TzmlrtsarIY",
    range: "output",
  };
  data = await gsapi.spreadsheets.values.get(opt);
  console.log("data received");
  return data.data.values;
};

// Google Authorize + Load Data
gClientAuthorize(gClient);

module.exports = { gsrun, gClient };
