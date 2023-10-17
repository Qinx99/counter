var hits = 0;
var hitElement = document.querySelector('.hits');

document.body.onkeyup = function (e) {
  if (e.keyCode == 67) {
    addHit();
  } else if (e.keyCode == 82) {
    reset();
  }
};

var addHit = function () {
  hits++;
  renderHits();
};

var renderHits = function () {
  hitElement.innerHTML = hits;
};

function reset() {
  hits = 0;
  renderHits();
}
