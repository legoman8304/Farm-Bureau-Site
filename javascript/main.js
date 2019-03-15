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
console.debug("Mobile device");
}
else {
console.debug("Not a mobile device");
}
//////////////////////////////////////////////////////////
