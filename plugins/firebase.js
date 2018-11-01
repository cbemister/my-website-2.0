import firebase from 'firebase'
//import 'firebase/firestore' //if use firestore

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  })
}

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()
//const storage = firebase.storage() //if use storage

export { storage, db }


