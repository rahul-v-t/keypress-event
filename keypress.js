document.addEventListener("keypress", (event) => {
  if ((event.code == "KeyE") || (event.code == "KeyQ") || (event.code == "KeyU") || (event.code == "KeyA") || (event.code == "KeyL"))
  {
    document.getElementById("click").innerHTML = "You Clicked Equal" ;
  } 
  else
  {
    document.getElementById("click").innerHTML = "Not Equal" ;
  } 
});