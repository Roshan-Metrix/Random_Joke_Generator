const darkLight = document.getElementById('modeSwitch');
const body = document.querySelector('body');

darkLight.addEventListener('click',()=>{
  body.classList.toggle('dark');
  body.classList.toggle('bg-black');
});
