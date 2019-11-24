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


function getConfig(callback){
    myDb.ref("/config").once("value").then((snapshot)=>{
        var data = snapshot.val();
        callback(data);
    });
}
function updateConfig(data,callback){
    myDb.ref("/config").set({
        data:data,
        id : "yolo"
    },error=>{
        if (error){
            console.error(error);
        }
        else{
            getConfig(data=>{
                callback(data);
            });
        }
    })
}

function getHashtags(callback){
    myDb.ref("/hashtags").once("value").then(snapshot=>{
        var string = "";
        Object.keys(snapshot.val()).forEach(key=>{
            if (string === ""){
                string+= snapshot.val()[key];
            }else{
                string+= " "+snapshot.val()[key];
            }
        });
        callback(string);
    })
}
function putHashtags(string,callback){
    var array = string.split(" ");
    myDb.ref("/hashtags").set({});
    array.forEach(hashtag=>{
        var reference = myDb.ref("/hashtags").push();
        reference.set(hashtag);
    });
    getHashtags(hashtags=>{
        callback(hashtags)
    });
}

module.exports = {
    getConfig,updateConfig,getHashtags,putHashtags
}