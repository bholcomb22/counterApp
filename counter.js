var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var counterSchema = new Schema ({
    count:{
        type: Number,
        required: true
    }
});

var Counter = module.exports = mongoose.model("Counter", counterSchema, "counter");

//get counter
module.exports.getCount = function(callback){
    Counter.find(callback);
};

//update counter
module.exports.updateCount = function(id, count, options, callback){
    var query = {_id: id};
    var update = {
        $inc: {"count" : 1}
    };
    Counter.findOneAndUpdate(query, update, options, callback);
};