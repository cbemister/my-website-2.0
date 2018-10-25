'use strict';

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

//const functions = require('firebase-functions');
const request = require('request-promise');

// This is the URL that we will callback and send the content of the updated data node.
const WEBHOOK_URL = 'https://api.netlify.com/build_hooks/5bd1beeb1f12b76175b9fe38';

// Reads the content of the node that triggered the function and sends it to the registered Webhook
// URL.
exports.webhook = functions.database.ref('/posts/{pushId}').onWrite((snap) => {
  return request({
    uri: WEBHOOK_URL,
    method: 'POST',
    json: true,
    body: '',
    resolveWithFullResponse: true,
  }).then((response) => {
    if (response.statusCode >= 400) {
      throw new Error(`HTTP Error: ${response.statusCode}`);
    }
    console.log('SUCCESS! Posted', snap.ref);
    return null;
  });
});