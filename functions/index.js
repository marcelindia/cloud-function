const functions = require("firebase-functions");

//on any request that is made to this function
exports.sayHello = functions.https.onRequest((req, res) => {
  const message = "Hello My Friend.";
  res.send(message);
});

exports.showStudent = functions.https.onRequest((req, res) => {
  const student = {
    firstName: "Diana",
    lastName: "Marcelin",
    email: "marc@yahoo.com",
    phoneNumber: "976-DIAA",
  };
  res.send(student);
});

//To get >> https://us-central1-my-first-cloud-f-dmmm.cloudfunctions.net/sayHello

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
