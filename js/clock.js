const clock = document.querySelector(".js-clock .clock__text");

function getTime() {
  const date = new Date();
  const hours =String(date.getHours()).padStart(2,"0") ;
  const minutes =String(date.getMinutes()).padStart(2,"0") ;
  const seconds =String(date.getSeconds()).padStart(2,"0") ;
  const time = `${hours}:${minutes}:${seconds}`;
  clock.innerHTML = time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();
