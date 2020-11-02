//Hotspot system
var canvas6 = document.getElementById("canvas6");
var ctx = canvas6.getContext("2d");
var cw = canvas6.width;
var ch = canvas6.height;
function reOffset() {
  var BB = canvas6.getBoundingClientRect();
  offsetX = BB.left;
  offsetY = BB.top;
}
var offsetX, offsetY;
reOffset();
window.onscroll = function (e) {
  reOffset();
};
window.onresize = function (e) {
  reOffset();
};
var hotspots = [
  { x: 100, y: 100, radius: 20, tip: "You are over 100,100" },
  { x: 100, y: 200, radius: 20, tip: "You are over 100,200" },
];
draw();
canvas6.addEventListener('mousemove', (e) => {
     handleMouseMove(e)
})
function draw() {
  for (var i = 0; i < hotspots.length; i++) {
    var h = hotspots[i];
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
  }
}
function handleMouseMove(e) {
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();
  mouseX = parseInt(e.clientX - offsetX);
  mouseY = parseInt(e.clientY - offsetY);
  ctx.clearRect(0, 0, cw, ch);
  draw();
  for (var i = 0; i < hotspots.length; i++) {
    var h = hotspots[i];
    var dx = mouseX - h.x;
    var dy = mouseY - h.y;
    if (dx * dx + dy * dy < h.radius * h.radius) {
      ctx.fillText(h.tip, h.x, h.y);
    }
  }
}
