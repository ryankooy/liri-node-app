var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
require('dotenv').config();
var keys = require('./keys.js');
// var db = require('db');

var spotify = new Spotify(keys.spotify);

spotify.search({
    type: ,
    query:
}, function(err, data) {
    if(err) {
        return console.log(err);
    }
    console.log(data);
});

axios.get().then(function(resp) {
    console.log(resp);
}).catch(function(err) {
    return console.log(err);
}).finally(function() {

});

// db.connect({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS
// });