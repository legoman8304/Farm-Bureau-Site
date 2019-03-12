//top

//showFallbackImage() declaration=======================
function showFallbackImage() {
    document.getElementById("fallbackImage").className = "show";
    document.getElementById("fallbackImage1").className = "hide";
}
//end of showFallbackImage() declaration=================

//device detection block ================================
var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 isMobile = true
}

if (isMobile = true) {
console.log("Mobile device");
}
else {
console.log("Not a mobile device");
}
//end of device detection block==========================
//device detection block secondary method================
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
//end of device detection block secondary method=========
