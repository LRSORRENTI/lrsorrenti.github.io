const jokeContent = document.getElementById('joke');

const newJoke = document.getElementById('joke-btn')



newJoke.addEventListener('click',  generateNewJoke)


// generateNewJoke()

// function generateNewJoke(){

// const config =  {
//     headers: {
//         'Accept': 'application/json'
//     }
// }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(response =>response.json())
//         .then((data) => 
//         {
//             jokeContent.innerHTML = data.joke
//         })
    
// }


// THE ABOVE UTILIZES FETCH, NOW BELOW WE'LL USE ASYNC/AWAIT

generateNewJoke()

async function generateNewJoke(){

const config =  {
    headers: {
        'Accept': 'application/json'
    }
}

  const response = await fetch('https://icanhazdadjoke.com', config)
  
    const jokeData = await response.json()
console.log(jokeData.status)
console.log(jokeData.id)
console.log(jokeData.joke)
    jokeContent.innerHTML = jokeData.joke
}
