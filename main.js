var modal = document.getElementById('modal');

var pozadina = document.getElementById('pozadina');

var btn = document.getElementById('dugme');

var span = document.getElementById('close')



btn.onclick = function(){
    modal.style.display = "block";
    pozadina.style.background = "black";
    pozadina.style.opacity= "0.3";
    pozadina.style.color="white";

}

span.onclick = function(){
    modal.style.display = "none";
    pozadina.style.opacity = "0.5";
  }