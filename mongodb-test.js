// Getting Started With MongoDB (NodeJS edition)
// https://docs.mongodb.com/getting-started/node/
/*
// Install and connect via NodeJS Driver
// https://docs.mongodb.com/getting-started/node/client/

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var DB_URL = 'mongodb://localhost:27017/test';

MongoClient.connect(DB_URL, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});
*/

/*
// Import via Insert
// https://docs.mongodb.com/getting-started/node/insert/

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var insertDocument = function(db, callback) {
  db.collection('restaurants').insertOne( {
    "address" : {
      "street" : "2 Avenue",
      "zipcode" : "10075",
      "building" : "1480",
      "coord" : [ -73.9557413, 40.7720266 ]
    },
    "borough" : "Manhattan",
    "cuisine" : "Italian",
    "grades" : [
      {
        "date" : new Date("2014-10-01T00:00:00Z"),
        "grade" : "A",
        "score" : 11
      },
      {
        "date" : new Date("2014-01-16T00:00:00Z"),
        "grade" : "B",
        "score" : 17
      }
    ],
    "name" : "Vella",
    "restaurant_id" : "41704620"
  }, function(err, result) {
    assert.equal(err, null);
    console.log('result', result);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
*/