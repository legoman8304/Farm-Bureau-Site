//top

//device detection block ===============================/
var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 isMobile = true
}
else {
  isMobile = false
}
if (isMobile = true) {
console.debug("Is a mobile device");
}
else {
console.debug("Not a mobile device");
}
//////////////////////////////////////////////////////////
