var zoom = '100%';
var zoomTime;
var scrollTime;
var zoomInterval = 100;

var zooms = [
  function zoomOut(){
    zoom = (parseInt(zoom, 10) - 1) + '%';
    if (parseInt(zoom, 10) < 1){
      clearTimeout(zoomTime);
      return;
    }

    document.body.style.zoom = zoom;

    zoomTime = setTimeout(zoomOut, zoomInterval);
  },
  function zoomIn(){
    zoom = (parseInt(zoom, 10) + 1) + '%';
    if (parseInt(zoom, 10) > 1000){
      clearTimeout(zoomTime);
      return;
    }

    document.body.style.zoom = zoom;

    zoomTime = setTimeout(zoomIn, zoomInterval);
  }
];

zoomTime = setTimeout(randomZoom, zoomInterval);

function randomZoom() {
  randomFrom(zooms)();
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.addEventListener('scroll', function (e){
  clearTimeout(zoomTime);
  clearTimeout(scrollTime);
  if (parseInt(zoom, 10) < 100){
    zoom = (parseInt(zoom, 10) + 3) + '%';
    document.body.style.zoom = zoom;
  }
  if (parseInt(zoom, 10) > 100){
    zoom = (parseInt(zoom, 10) - 3) + '%';
    document.body.style.zoom = zoom;
  }
  scrollTime = setTimeout(randomZoom, zoomInterval);
});
