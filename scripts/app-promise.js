console.log("Hello Sho!");

function processResponse(response) {
    return response.json();
}

// Show the joke on th page
// 1. make the request using fetch()
fetch('https://icanhazdadjoke.com', {
    headers: {
        accept: 'application/json'
    }
})
.then(response => {
    console.log(response);
    const theData = response.json();return theData
})
.then(data => {
    console.log(data);
    return data.joke;
})
.then (theJoke => {
    console.log(theJoke);
})
.catch(err => console.log(err))
// 2. grab the .joke
// 3. render it to the page

// Alternate to use .catch() is to pass a second callback to .then():
// fetch('https://icanhazdadjoke.com', {
//     headers: {
//         accept: 'application/json'
//     }
// })
// .then(response => response.json(), err => console.log(err))