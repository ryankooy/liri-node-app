# Liri Node App

### This app is a search utility that retrieves song, concert, and movie data based on a user's input from the command line.

Liri Node App is primarily composed of two JavaScript files, *liri.js* and *keys.js*, with *liri.js* containing the executable functions, and *keys.js* exporting the related Spotify API keys. Additionally, Liri contains the package files that make its functionality possible.

## Instructions For Running Liri

After installing the required modules and packages within Node.js (related npm technologies are listed below), a user is able to type a command followed by a desired query name. The required format for user input is `node liri <command> <search item>`.

### Spotify-This-Song

To utilize the Spotify song search feature, a user must type `node liri spotify-this-song <song title>` in the CLI. Liri will respond by displaying the 10 most relevant results, each of which will be comprised of an artist's name, the song title, an album containing the song, and, if available, a link to a Spotify preview of the track.

![the 'spotify-this-song' command](https://media.giphy.com/media/Y2hvAPdKuNCGwB26lk/giphy.gif)

### Concert-This

When a user inputs `node liri concert-this <artist name>`, Liri requests data from the Bands In Town API, returning information about the next 15 concert dates for the selected artist, and then outputs the data; venue names and locations are included in these results. The user is notified if no shows are found.

![the 'concert-this' command](https://media.giphy.com/media/eMDz5RbxdTtlcosaOn/giphy.gif)

### Movie-This

For finding movie stats with Liri, a user types `node liri movie-this <movie title>`. This command requests data from the OMDB API, and displays information about the movie including averaged critic ratings from IMDB and Rotten Tomatoes. If the queried movie is not found, the user will be alerted by a message.

![the 'movie-this' command](https://media.giphy.com/media/gHQCdj8i3nSHC8xWfx/giphy.gif)

### Do-What-It-Says

Liri provides a feature called Do-What-It-Says, which reads content from a text file named *random.txt* and executes any command/query-term pair present. The text must contain one of the commands discussed above, followed by a comma, and finally, a search term within quotes. A user simply types `node liri do-what-it-says` to utilize this feature.

![the 'do-what-it-says' commands](https://media.giphy.com/media/SUczF0kBZWgh37cb5j/giphy.gif)

### log.txt

In addition to displaying results, Liri logs a copy of the data as text to *log.txt*, allowing a user to access a receipt of all prior searches.

## Technologies Used

The Liri Node App is dependent on multiple modules, packages, and technologies, incorporating:

* **Node.js**, the CLI
* **Node-Spotify-API**, the package for accessing Spotify's API
* **Axios**, for "getting" data from the Bands In Town and OMDB APIs
* **fs**, the module for reading and writing text in separate files
* **Moment.js**, the package for Liri's date formatting
* **DotEnv**, for securely storing the Spotify package's client id and secret
