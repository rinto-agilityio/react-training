import * as firebase from "firebase";

const fbConfig = {
  apiKey: "AIzaSyCZpGh86wxsZM8H_PyZVKsk_MnjopqYDyY",
  authDomain: "instagram-rn.firebaseapp.com",
  databaseURL: "https://instagram-rn.firebaseio.com",
  projectId: "instagram-rn",
  storageBucket: "gs://instagram-rn.appspot.com",
  messagingSenderId: "201897093582"
};

const fbApp = firebase.initializeApp(fbConfig);
var storageRef = firebase.storage().ref();

export const uploadImage = imageFile => {
  let fileName = Date.now() + imageFile.fileName;
  let fileBase64 = imageFile.data;

  return storageRef
    .child("images")
    .child(fileName)
    .putString(fileBase64, "base64")
    .then(snapshot => {
      // console.log("snapshot: ", snapshot);
      return snapshot;
    });
};
