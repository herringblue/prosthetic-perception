chrome.windows.getAll({}, function (windows){
  for (var wind of windows){
    jitter(wind);
  }
});

chrome.windows.onCreated.addListener(function (wind){
  jitter(wind);
});

function jitter(wind){
  var lr = Math.random() < 0.5 ? -1 : 1;
  var ud = Math.random() < 0.5 ? -1 : 1;
  chrome.windows.update(wind.id,
  {
    left: wind.left + lr,
    top: wind.top + ud
  }, jitter);
}
