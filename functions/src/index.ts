import * as functions from "firebase-functions";

exports.newApiKey = functions.firestore
  .document("API_KEYS/{apiKey}")
  .onCreate((snap, context) => {
    functions.logger.info(snap, { structuredData: true });
  });
