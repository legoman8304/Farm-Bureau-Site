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
//adblock detection block ==============================/
if( window.canRunAds === undefined ){
  // adblocker detected, show fallback
  $("#adblock_off").hide();
  $(".adblock_off").hide();
  console.debug("adblock enabled");
}
else {
  $("#adblock_on").hide();
  $(".adblock_on").hide();
  console.debug("adblock disabled/nonexistant");
}
//////////////////////////////////////////////////////////
