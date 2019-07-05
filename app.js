const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const MongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb+srv://bholcomb:Saraho12@cluster0-jbwcp.mongodb.net/test?retryWrites=true&w=majority";

app.use(express.static(__dirname+"/static"));
app.use(cors());
mongoose.connect(connectionString, {useNewUrlParser: true, dbName: "counterApp", useFindAndModify: false});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});

Counter = require("./counter");

app.get("/api", function(req, res){
    Counter.getCount(function(err, counter){
        if (err){
            throw err;
        }
        res.json(counter);
    })
});
app.put("/api", function(req, res){
    let id = "5cf2b27b1c9d44000093a0fc";
    let count = req.body;
    Counter.updateCount(id, count, {returnNewDocument: true}, function(err, counter){
        if(err){
            throw err;
        }
        res.json(counter);
    });
        
});
app.listen(3000);
console.log("running on port 3000!");
