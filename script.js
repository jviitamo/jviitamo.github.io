
var modal = document.getElementById("myModal");

var images = document.getElementsByClassName("projektikuva");
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
img.onclick = function(){
  if(window.innerWidth>850) {
  modal.style.display = "block";
  modalImg.src = this.src;
  }
 }
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


function writeText() {
  const text = '"Photographer and Information Networks student with a creative mindset"';
  speed = 80

  if (i < text.length) {
    document.getElementById("quote").innerHTML += text.charAt(i);
    i++;
    setTimeout(writeText, speed);
  }
}



