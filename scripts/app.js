async function main() {
    const button = document.querySelector('[data-new-joke]');
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const joke = await getJoke();
        renderJoke(joke);
    })
}
main()




async function getJoke(){
    const jokePromise = fetch('https://icanhazdadjoke.com', {
        headers: {
            accept: 'application/json'
        }
    })
    const response = await jokePromise;
    const jokeData = await response.json();
    // console.log(jokeData);
    // console.log(jokeData.joke);
    return jokeData.joke;
}

async function renderJoke() {
    const joke = await getJoke();
    const p = document.createElement('p');
    p.textContent = joke;
    document.querySelector('[data-root]').appendChild(p)
}