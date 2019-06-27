//dom elements

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //set am or pm
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;

  //ourput time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

//add zero
function addZero(n) {
  return parseInt(n, 10) < 10 ? "0" : "" + n;
}

//Background

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //morming
    document.body.style.backgroundImage = "url('../image/morning.jpg')";
    document.body.style.backgroundSize = "100% 100%";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('../image/afternoon.jpg')";
    document.body.style.backgroundSize = "100% 100%";
    greeting.textContent = "Good Afternoon";
  } else {
    //evening
    document.body.style.backgroundImage = "url('../image/evening.jpg')";
    document.body.style.backgroundSize = "100% 100%";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}
//storing editable names in local storage

//set name
function setName(e) {
  if (e.type === "keypress") {
    //make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//set focus
function setFocus(e) {
  if (e.type === "keypress") {
    //make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setName);
focus.addEventListener("blur", setName);

//Run
showTime();
setBgGreet();
getName();
getFocus();
