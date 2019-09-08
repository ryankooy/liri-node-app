# Liri Node App

### This app is a search bot that retrieves song, concert, and movie information based on a user's input from the command line.

Liri Node App is primarily composed of two JavaScript files, liri.js and keys.js, with liri.js containing the executable functions, and keys.js exporting the related Spotify API keys. 

## Instructions For App Usage

After installing the required NPMs within Node.js (related modules and technologies are listed below), a user is able to type an argument followed by a desired query name. The required format for user input is `node liri <argument> <search item>`.

### Spotify-This-Song

To utilize the Spotify song search feature, a user must type `node liri spotify-this-song <song title>` in the CLI. Liri will respond by displaying the 10 most relevant results, each of which will be comprised of an artist's name, the song title, an album containing the song, and, if available, a link to a Spotify preview of the track.

![the 'spotify-this-song' argument](https://media.giphy.com/media/Y2hvAPdKuNCGwB26lk/giphy.gif)

### Concert-This

When a user inputs `node liri concert-this <artist name>`, Liri requests data from the Bands In Town API, returning information about the next 15 concert dates for the selected artist, and then populates that data within the CLI; venue names and locations are included in these results. The user is notified if no shows are found.

![the 'concert-this' argument](https://media.giphy.com/media/eMDz5RbxdTtlcosaOn/giphy.gif)

### Movie-This

For finding movie stats with Liri, a user types `node liri movie-this <movie title>`.

![the 'movie-this' argument](https://media.giphy.com/media/gHQCdj8i3nSHC8xWfx/giphy.gif)

### Do-What-It-Says

Liri provides a feature called Do-What-It-Says, which reads content from a text file named random.txt and executes any argument and query term that is present. The text must contain one of the arguments discussed above, followed by a comma then a search term surrounded by quotes.

![the 'do-what-it-says' argument](https://media.giphy.com/media/SUczF0kBZWgh37cb5j/giphy.gif)



* Give start-to-finish instructions on how to run the app
* Clearly list the technologies used in the app
