const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");
const loader = document.querySelector(".loader");

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
];

function randomItemFromArray(arr,not){
    const item = arr[Math.floor(Math.random() * arr.length)];

    if (item === not){
        console.log("We already used that one!")
        return randomItemFromArray(arr, not);
    }
    return item;
}
  
async function fetchJoke() {
    //turn loader on
    loader.classList.remove("hidden");
    jokeButton.classList.add("hidden");

    const response = await fetch("https://icanhazdadjoke.com",{
        headers:{
            Accept:"application/json",
        },
    });
    const data = await response.json();
    // console.log(data);

    //turn the loader off
    loader.classList.add("hidden");
    jokeButton.classList.remove("hidden");

    return data;
}

jokeButton.addEventListener("click", async ()=>{
    const {joke} = await fetchJoke()
    // console.log(joke);
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
});