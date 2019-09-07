var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
require('dotenv').config();
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');

var command = process.argv[2];
var divider = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';

switch(command) {
    case 'concert-this':
        var artist = process.argv.slice(3).join(' ');
        concertThis();
        // log();
        break;
    case 'spotify-this-song':
        var song = process.argv.slice(3).join(' ');
        if(!song) {
            song = 'The Sign';
        }
        spotifyThis();
        // log();
        break;
    case 'movie-this':
        var movie = process.argv.slice(3).join(' ');
        if(!movie) {
            movie = 'Mr. Nobody';
        }
        movieThis();
        // log();
        break;
    case 'do-what-it-says':
        doThis();
        // log();
        break;
}

function spotifyThis() {
    spotify.search({
        type: 'track',
        query: song
    }, function(err, data) {
        var preview;
        var info;
        if(err) {
            return console.log(err);
        }
        for (var i = 0; i < 10; i++) {
            var results = data.tracks.items[i];
            info = [
                'Artist: ' + results.artists[0].name,
                'Song: ' + results.name,
                'Album: ' + results.album.name,
                'Preview: ' + results.preview_url,
                '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n'
            ].join('\n\n');
            console.log(info);
            fs.appendFile('log.txt', info, function(err) {
                if(err) {
                    return console.log(err);
                }
            });
            // if(results.preview_url !== null) {
            //     preview = 'Preview: ' + results.preview_url;
            // }
        }
    });
}

function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(resp) {
            var date;
            var results = resp.data;
            console.log('Artist: ' + artist);
            if(results[1] !== undefined) {
                for (var i = 0; i < 15; i++) {
                    date = moment(results[i].datetime).format('L');
                    info = [
                        'Venue: ' + results[i].venue.name,
                        'Location: ' + results[i].venue.city + ', ' + results[i].venue.country,
                        'Date: ' + date,
                        '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n'
                    ].join('\n\n');
                    console.log(info);
                    fs.appendFile('log.txt', info, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                    });
                }
            } else {
                console.log('No shows to show.');
            }
        })
        .catch(function(err) {
            if(err.resp) {
                console.log("---------------Data---------------");
                console.log(err.results);
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
            var results = resp.data;
            if(results.Title !== undefined) {
                var info = [
                    'Title: ' + results.Title,
                    'Year: ' + results.Year,
                    'IMDB Rating: ' + results.Ratings[0].Value,
                    'Rotten Tomatoes Rating: ' + results.Ratings[1].Value,
                    'Country: ' + results.Country,
                    'Language: ' + results.Language,
                    'Plot: ' + results.Plot,
                    'Actors: ' + results.Actors
                ].join('\n\n');
                console.log(info);
                fs.appendFile('log.txt', info, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                });
            } else {
                console.log("I don't think that's a real movie.");
            }
        })
        .catch(function(err) {
            if(err.resp) {
                console.log("---------------Data---------------");
                console.log(err.results);
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