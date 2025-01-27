
const admin = require("firebase-admin");
const dotenv = require('dotenv');
dotenv.config();
const serviceAccount = require(process.env.FIREBASE_KEY_PATH);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_PROJECT_STORAGE_BUCKET, 
});

const bucket = admin.storage().bucket();

module.exports = bucket;
  