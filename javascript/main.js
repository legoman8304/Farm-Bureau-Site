//top

//showFallbackImage() declaration======================/
function showFallbackImage() {
  var x = document.getElementById("fallbackImage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//////////////////////////////////////////////////////////

//device detection block ===============================/
var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 isMobile = true
}
else {
  isMobile = false
}
if (isMobile = true) {
console.log("Mobile device");
}
else {
console.log("Not a mobile device");
}
//////////////////////////////////////////////////////////
