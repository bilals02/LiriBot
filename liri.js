require('dotenv').config();
var Spotify = require('node-spotify-api');


var spotify = new Spotify({
    id: process.env.SPOTIFY_Client_ID,
    secret: process.env.SPOTIFY_Client_Secret
  });
//Obtain the command to run process.argv
//Write afunction that take sin the command given and determines if it is valid or not
var usrCommand = process.argv[2];
var additionalInput = process.argv[3] || null;
//write methods for each case to acomplish wehat we ned to do.
userInput(usrCommand, additionalInput);
function userInput (usrCommand, additionalInput){
    if (usrCommand==="movie-this"){
        console.log("movie");
    }else if (usrCommand==="spotify-this-song"){
        spotifyThis(additionalInput)
    }else if (usrCommand==="do"){
        console.log("do");
    }else if (usrCommand==="tweets"){
        console.log("tweets");
    }else {
        console.log("Please select an appropriate command...");
    }


};


function spotifyThis(input) {
    

spotify.search({ type: 'track', query: input || 'I Saw The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0]); 
});
}




//tweets - obtain last 20 tweets
//movie-this - it shoudl fetch a defauklt nmovie
//movie-this somemovie - should search for that movie
//spotify-this-song - should fetch a defualt song
//spotify-this-song songname - should fetch that song
//do - read from a text file y ou have pre-created and execute some command