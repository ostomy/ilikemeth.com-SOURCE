let counter = 0;
let Title = 'ilikemeth.com >.<';
let direction = true;

aniTitle = setInterval(function () {
    if (counter == Title.length) direction = false;
    if (counter == false) direction = true;
    counter = (direction == true) ? ++counter : --counter;
    newtitle = (counter == 0) ? "" : Title.slice(0, counter);
    document.title =  '' + newtitle;
    if (document.title == '') {
      document.title = 'stacker'
    }
}, 400)

window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
    return false;
  }
});

function audioPlay() {
  var audio = document.getElementById("audio");
  audio.volume = 0.5;
  audio.play()
}
