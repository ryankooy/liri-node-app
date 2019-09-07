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
        var artist = process.argv.splice(3, process.argv.length - 1);
        artist = artist.join('+');
        concertThis();
        log();
        break;
    case 'spotify-this-song':
        var song = process.argv.splice(3, process.argv.length - 1);
        song = song.join('+');
        if(!song) {
            song = 'The Sign';
        }
        spotifyThis();
        log();
        break;
    case 'movie-this':
        var movie = process.argv.splice(3, process.argv.length - 1);
        movie = movie.join('+');
        if(!movie) {
            movie = 'Mr. Nobody';
        }
        movieThis();
        log();
        break;
    case 'do-what-it-says':
        doThis();
        log();
        break;
}

function spotifyThis() {
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
            if(data.tracks.items[i].preview_url !== null) {
                console.log('Preview: ' + data.tracks.items[i].preview_url);
            }
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        }
    });
}

function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(resp) {
            console.log('Artist: ' + artist);
            for (var i = 0; i < 20; i++) {
                var date = moment(resp.data[i].datetime).format('L');
                console.log('Venue: ' + resp.data[i].venue.name);
                console.log('Location: ' + resp.data[i].venue.city + ', ' + resp.data[i].venue.country);
                console.log('Date: ' + date);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
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
            }
        });
}

function movieThis() {
    axios.get('http://www.omdbapi.com/?t=' + movie + '&apikey=trilogy')
        .then(function(resp) {
            console.log('Title: ' + resp.data.Title);
            console.log('Year: ' + resp.data.Year);
            console.log('IMDB Rating: ' + resp.data.Ratings[0].Value);
            console.log('Rotten Tomatoes Rating: ' + resp.data.Ratings[1].Value);
            console.log('Country: ' + resp.data.Country);
            console.log('Language: ' + resp.data.Language);
            console.log('Plot: ' + resp.data.Plot);
            console.log('Actors: ' + resp.data.Actors);
        })
        .catch(function(err) {
            if(err.resp) {
                console.log("---------------Data---------------");
                console.log(err.resp.data);
                console.log("---------------Status---------------");
                console.log(err.resp.status);
                console.log("---------------Status---------------");
                console.log(err.resp.headers);
            }
        });
}

function doThis() {
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if(err) {
            return console.log(err);
        }
        var itSays = data.substr(0, data.indexOf(','));
        var name = data.substr(data.indexOf('"'));
        switch(itSays) {
            case 'concert-this':
                artist = name;
                concertThis();
                break;
            case 'spotify-this-song':
                song = name;
                spotifyThis();
                break;
            case 'movie-this':
                movie = name;
                movieThis();
                break;
        }
    });
}

function log() {
    fs.appendFile('log.txt', command + '\n', function(err) {
        if(err) {
            return console.log(err);
        }
    });
}