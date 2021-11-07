import "./../scss/index.scss";
function getTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = date.getDay();

  document.querySelector(".hour").innerText = h;
  document.querySelector(".minutes").innerText = m;
  document.querySelector(".seconds").innerText = s;
  document.querySelector(".day").innerText = d;
}

window.setInterval(() => {
  getTime();
}, 1000);
