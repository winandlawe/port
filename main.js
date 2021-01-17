openNav = () => {
  document.querySelector("ul").style.display = "block";
}

closeNav = () => {
  document.querySelector("ul").style.display = "none";
}

topFunction = () => {
  document.body.scrollTop = 0; // til Safari
  document.documentElement.scrollTop = 0; // til Chrome, Firefox, IE og Opera
}

openText = () => {
  document.querySelector("#ansat").style.display = "block";
}

closeText = () => {
  document.querySelector("#ansat").style.display = "none";
}



openSkills = () => {
  document.querySelector("#glow").style.display = "block";
}


closeSkills = () => {
  document.querySelector("#glow").style.display = "none";
}