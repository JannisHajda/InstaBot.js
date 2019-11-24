var data = {};


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('./config.json');
var db;

async function connect(callback) {
    var url = config.mongo_url;


    //verbinde mit MongoDB
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


    // Use connect method to connect to the Server
    client.connect(async function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        db = client.db("instabot-js");
        const intagramCollection = db.collection("instagram");
        data.instagram = await intagramCollection.findOne({});
        const puppeteerCollection = db.collection("puppeteer");
        data.puppeteer = await puppeteerCollection.findOne({});

        callback();
    });

}

async function putHashtags(hashtagString) {
    var array = hashtagString.split(" ");
    var data = await db.collection("instagram").updateOne({}, { $set: { hashtags: array } });
    return data;

}
async function updateConfig(instagram, puppeteer) {
    instagram = await db.collection("instagram").updateOne({}, { $set: instagram });
    instagram = await db.collection("puppeteer").updateOne({}, { $set: puppeteer });
}




module.exports = { connect, data, putHashtags, updateConfig };