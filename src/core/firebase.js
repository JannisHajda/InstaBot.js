const firebase = require("firebase");
const firebasedatabase = require("firebase/database");
const firebaseConfig = {
  apiKey: "AIzaSyC2LF3Imo7IKDEYIr4kmvaqdzK2yGa5MpE",
  authDomain: "instabot-62b57.firebaseapp.com",
  databaseURL: "https://instabot-62b57.firebaseio.com",
  projectId: "instabot-62b57",
  storageBucket: "instabot-62b57.appspot.com",
  messagingSenderId: "142366453751",
  appId: "1:142366453751:web:aed851c795c7f928a508f2"
};
firebase.initializeApp(firebaseConfig);
var myDb = firebase.database();

function getIds(callback) {
  myDb
    .ref("/ids")
    .once("value")
    .then(snapshot => {
      var data = snapshot.val();
      callback(data);
    });
}
function pushId(id, callback) {
  var newIdRef = myDb.ref(ids).push();
  newIdRef.set(
    {
      id
    },
    error => {
      if (error) {
        console.error(error);
      } else {
        getConfig(data => {
          callback(data);
        });
      }
    }
  );
}

module.exports = {
  getConfig,
  updateConfig
};
