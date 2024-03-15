const darkLight = document.getElementById('modeSwitch');
const body = document.querySelector('body');
const jokeBox = document.querySelector('#JokeBox');
const btn = document.querySelector('button')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

//For Switching Dark Light Mode
darkLight.addEventListener('click',()=>{
  body.classList.toggle('dark');
});

//
let getJoke = () => {
  fetch(url)
  .then(data => data.json())
  .then(item => {
jokeBox.textContent = `${item.joke}`;
  });
}
btn.addEventListener('click',getJoke);
getJoke();
