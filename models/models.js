var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    created_at: {type: Date, default: Date.now}
});

var postSchema = new mongoose.Schema({
    text: String,
    username: String,
    created_at: {type: Date, default: Date.now}
});

//declare models using schema
mongoose.model("User", userSchema);
mongoose.model("Post", postSchema);