const firebase = require("firebase-admin");
const serviceAccount = require("./permissions.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

const db = firebase.firestore();

module.exports = db;
