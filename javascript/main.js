function showFallbackImage() {
    document.getElementById("fallbackImage").className = "show";
    document.getElementById("fallbackImage1").className = "hide";
}

var isMobile = false; //initiate as false
// device detection
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 isMobile = true
}

if (isMobile = true) {
console.log("Mobile device");
}
else {
console.log("Not a mobile device");
}
