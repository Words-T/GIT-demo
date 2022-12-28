window.onload = function () {
  let plane = document.querySelector('.plane');
  let x = 0;
  let y = 0;
  let deg = 0;
  let count = 0;
  let vx = 0;
  let vy = 0;
  document.addEventListener('mousemove', function (e) {
    x = e.x - plane.offsetLeft - plane.clientWidth / 2;
    y = e.y - plane.offsetTop - plane.clientHeight / 2;
    deg = 360 * Math.atan(y / x) / (2 * Math.PI) + 45;
    if (x < 0) {
      deg += 180;
    }
    count = 0;
  })
  function draw() {
    plane.style.transform = 'rotate(' + deg + 'deg)';
    if (count < 100) {
      vx += x / 100;
      vy += y / 100;
    }
    plane.style.left = vx + 'px';
    plane.style.top = vy + 'px';
    count++;
  }
  setInterval(draw, 1);
}

