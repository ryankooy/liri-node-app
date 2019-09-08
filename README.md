# Liri Node App

### This app is a search bot that retrieves song, concert, and movie information based on a user's input from the command line.

Liri Node App is primarily composed of two JavaScript files, liri.js and keys.js, with liri.js containing the executable functions, and keys.js exporting the related Spotify API keys. 

* Give start-to-finish instructions on how to run the app
* Clearly list the technologies used in the app

## Instructions For App Usage

After installing the required NPMs within Node (related modules and technologies are listed below), a user is able to type an argument followed by a desired query name. The format is `node liri <argument> <search-item>`.

### Spotify-This-Song

To utilize the Spotify song search feature, a user must type `node liri spotify-this-song <song title>` in the command line. Liri will respond by displaying the 10 most relevant results, each of which will be comprised of the artist's name, the song title, the album containing the song, and, if available, a link to a Spotify preview of the track.

![the 'spotify-this-song' argument](https://media.giphy.com/media/Y2hvAPdKuNCGwB26lk/giphy.gif)

### Concert-This

If a user inputs `node liri concert-this <artist name>`,  . . .

![the 'concert-this' argument](https://media.giphy.com/media/eMDz5RbxdTtlcosaOn/giphy.gif)

### Movie-This

![the 'movie-this' argument](https://media.giphy.com/media/gHQCdj8i3nSHC8xWfx/giphy.gif)

### Do-What-It-Says

![the 'do-what-it-says' argument](https://media.giphy.com/media/SUczF0kBZWgh37cb5j/giphy.gif)
