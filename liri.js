var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
require('dotenv').config();
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');

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

function spotifyThis() {
    var song = process.argv.splice(3, process.argv.length - 1);
    song = song.join('+');
    spotify.search({
        type: 'track',
        query: song
    }, function(err, data) {
        if(err) {
            return console.log(err);
        }
        for (var i = 0; i < 20; i++) {
            console.log('Artist: ' + data.tracks.items[i].artists[0].name);
            console.log('Song: ' + data.tracks.items[i].name);
            console.log('Album: ' + data.tracks.items[i].album.name);
            console.log('--------------------------------------------');
        }
    });
}

function concertThis() {
    var artist = process.argv.splice(3, process.argv.length - 1);
    artist = artist.join('+');
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(resp) {
            console.log('Artist: ' + artist);
            for (var i = 0; i < 20; i++) {
                var date = moment(resp.data[i].datetime).format('L');
                console.log('Venue: ' + resp.data[i].venue.name);
                console.log('Location: ' + resp.data[i].venue.city + ', ' + resp.data[i].venue.country);
                console.log('Date: ' + date);
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