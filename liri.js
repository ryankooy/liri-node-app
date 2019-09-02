var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
require('dotenv').config();
var keys = require('./keys.js');
// var db = require('db');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

switch(command) {
    case 'concert-this':
        concertThis();
        break;
    case 'spotify-this-song':
        spotifyThis();
        break;
    case 'movie-this':
        movieThis();
        break;
    case 'do-what-it-says':
        doThis();
        break;
}

// function spotifyThis() {
//     spotify.search({
//         type: ,
//         query:
//     }, function(err, data) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log(data);
//     });
// }

function concertThis() {
    var artist = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(resp) {
            for (var i = 0; i < 20; i++) {
                console.log('Venue: ' + resp.data[i].venue.name);
                console.log('Location: ' + resp.data[i].venue.city + ', ' + resp.data[i].venue.country);
                console.log('Date: ' + resp.data[i].datetime);
                console.log('--------------------------------------------');
            }
        })
        .catch(function(err) {
            if(err.resp) {
                console.log("---------------Data---------------");
                console.log(err.resp.data);
                console.log("---------------Status---------------");
                console.log(err.resp.status);
                console.log("---------------Status---------------");
                console.log(err.resp.headers);
            } else if(err.request) {
                console.log(err.request);
            } else {
                console.log('Error', err.message);
            }
            console.log(err.config);
        });
}

function movieThis() {

}

function doThis() {

}