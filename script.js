function importHTML(){
  var paste = document.getElementById("paste").value;
  document.getElementById("test").value = paste.substring(paste.indexOf("|poke|p1|"))
}
