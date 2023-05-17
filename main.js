

//  $('.counter').counterUp({
//    delay: 10,
//    time: 1000
// });

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











 


