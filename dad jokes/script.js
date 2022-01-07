const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


// USING async/await
async function generateJoke () {
    const config = {
        headers: {
            Accept: 'application/json',
        }, 
    }
// any promises that you wanna put in to a variable, must add await
 const res = await fetch('https://icanhazdadjoke.com', config)

 const data = await res.json()

 jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke () {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         }, 
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }