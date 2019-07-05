const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema ({
    count:{
        type: Number,
        required: true
    }
});

let Counter = module.exports = mongoose.model("Counter", counterSchema, "counter");

//get counter
module.exports.getCount = function(callback){
    Counter.find(callback);
};

//update counter
module.exports.updateCount = function(id, count, options, callback){
    let query = {_id: id};
    let update = {
        $inc: {"count" : 1}
    };
    Counter.findOneAndUpdate(query, update, options, callback);
};
