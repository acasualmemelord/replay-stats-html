function importHTML(){
  var paste = document.getElementById("paste").value;
  try{
    document.getElementById("test1").innerHTML = paste.indexOf("|poke|p1|") + " " + paste.substring(paste.indexOf("|poke|p1|") + 2).indexOf("|poke|p1|");
    document.getElementById("test").innerHTML = paste.substring(paste.indexOf("|poke|p1|"), paste.substring(paste.indexOf("|poke|p1|") + 1).indexOf("|poke|p1|"));
  }catch(err){
    document.getElementById("test").innerHTML = err;
  }
}
