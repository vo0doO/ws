function getMSIEVersion() {
    var ua = window.navigator.userAgent
      , matches = ua.match(/MSIE (\d+)/);
    if (matches && 2 <= matches.length) {
        var version = parseInt(matches[1]);
        if (!isNaN(version)) {
            return version
        }
    }
    return null
}
function showNotSupported() {
    document.getElementById("polymerNotLoaded").className = "showNotSupported"
}
var msieVersion = getMSIEVersion();
if (msieVersion && 10 >= msieVersion) {
    showNotSupported()
} else {
    var NOT_SUPPORTED_TIMEOUT_MS = 5e3;
    setTimeout(function() {
        if (document.body.hasAttribute("unresolved")) {
            showNotSupported()
        }
    }, NOT_SUPPORTED_TIMEOUT_MS)
}
