console.log('***** Music Collection *****')
//Create a variable `collection` that starts as an empty array.
let collection = []

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished){
    const album = {title, artist, yearPublished}
    collection.push(album)
    return console.log(album)
}

console.log(collection)
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
addToCollection('bonito generation', 'kero kero bonito', 2016);
addToCollection('speaking in tongues', 'talking heads', 1982);
addToCollection('yeezuz', 'ye', 2013);
addToCollection('the life of pablo', 'ye', 2016);
addToCollection('supercell','supercell',2009);
addToCollection('igor','tyler, the creator',2019);
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(array){
    console.log(array.length)
        for(album of collection){
        console.log(album.title, 'by', album.artist, 'published in', album.yearPublished)
        }
}

// - Test the `showCollection` function.
showCollection(collection)

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist){
    results = [];{
        for(album of collection){
            if (artist == album.artist) {
               results.push(album)}
        }
        return console.log('results',results)
    }   
}

// - Test the `findByArtist` function. Make sure to test with an artist you know 
//   is in the collection, as well as an artist you know is not in your collection. 
//   - Check that for artists with multiple matches, all are found.
findByArtist('ye')
findByArtist('soad')



// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search(artist, yearPublished){
    results=[];{
        if (artist == undefined && yearPublished == undefined){
            console.log(collection)}
        else {
            for(album of collection){
                if (artist == album.artist && yearPublished == album.yearPublished){
                    results.push(album);}
                else if (artist !== album.artist || yearPublished !== album.yearPublished){
                    results.push();}
            } 
        console.log('results',results)}
    }
}

search('ray charles', 1957);
search('ye', 2013);
search();

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. 
//      You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```


