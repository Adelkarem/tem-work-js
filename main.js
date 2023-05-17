


 // contact
// map
const button=document.getElementById("btn");
btn.addEventListener("click",()=>{focas.style.display = "none"})

// / form validation contact.html
let form = document.getElementById("form");
let user = document.getElementById("username");
let email = document.getElementById("email");
let error = document.getElementById("error");
let subject = document.getElementById("subject");
let text = document.getElementById("text");
let submit = document.getElementById("submit");

function formvalidation() {
  if (username.value.length < 5) {
    error.innerHTML = "Please enter a valid username";
    error.style.color = "red"; 
    return false;
  }

  if (email.value.length < 5 && email.value.indexOf("@" == -1)) {
    error.innerHTML = "Please enter a valid email";
    error.style.color = "red"; 
    return false;
  }

  if (subject.value == "") {
    error.innerHTML = "Come on, you have a subject, don't you?";
    error.style.color = "red"; 
    return false;
  }

  if (text.value.length < 20) {
    error.innerHTML = "Um..yea, you have to write something to send this form";
    error.style.color = "red"; 
    return false;
  } else {
    alert("Thank you");
    error.innerHTML = "";
    return true;
  }
}
let title = document.getElementById("title");
 
title.addEventListener("click", ()=>{
alert("This site is trying to open pick an app.")

})

// footer subscribe
let message = document.getElementById("message");
let SUBSCRIBE =document.getElementById("SUBSCRIBE")
SUBSCRIBE.addEventListener("click", (e)=>{

  message.innerHTML = "Submitting...";
  message.style.color ="#fff"
  
})













function toggleMenu() {
  var navbarLinks = document.getElementById("navbarLinks");
  if (navbarLinks.style.display === "none" || navbarLinks.style.display === "") {
    navbarLinks.style.display = "flex";
  } else {
    navbarLinks.style.display = "none";
  }
}



function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
}










// / clock and date///
setInterval(()=>{
  const time = document.querySelector(".display #time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
});
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

function setDate() {
const now = new Date();
const mm = now.getMonth();
const dd = now.getDate();
const yyyy = now.getFullYear();
const secs = now.getSeconds();
const mins = now.getMinutes();
const hrs = now.getHours();
const monthName = [
  'January','February','March','April',
  'May','June','July','August','September',
  'October','November','December'
];

  month.innerHTML = monthName[mm];
day.innerHTML = dd;
year.innerHTML = yyyy;
}

setInterval(setDate,1000);

// end clock and date////


// $('.counter').counterUp({
//   delay: 10,
//   time: 1000
// });
