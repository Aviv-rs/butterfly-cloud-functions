import * as functions from "firebase-functions";

const { sendEmail } = require("../../services/digital.service");

exports.newApiKey = functions.firestore
  .document("API_KEYS/{apiKey}")
  .onCreate((snap, context) => {
    sendEmail("judgefudge315@gmail.com");
  });
