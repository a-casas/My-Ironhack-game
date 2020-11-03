//Hotspot system
var canvas6 = document.getElementById("canvas6")
var ctx = canvas6.getContext("2d");
canvas6.width = 1000
canvas6.height = 500
ctx.font='16px verdana'
ctx.fillStyle='#0bf631'
ctx.textAlign = "center"
var cw = canvas6.width
var ch = canvas6.height
function reOffset() {
  var BB = canvas6.getBoundingClientRect()
  offsetX = BB.left
  offsetY = BB.top
}
var offsetX, offsetY
reOffset()
window.onscroll = function (e) {
  reOffset();
};
window.onresize = function (e) {
  reOffset();
};
var hotspots = [
  { x: 507, y: 141, radius: 40, tip: "A small ray of light filters through the rock, illuminating an old stone balanced buddha." },
  { x: 734, y: 458, radius: 20, tip: "It is a small stone pagoda. Looks very old." },
  { x: 424, y: 172, radius: 10, tip: "A wooden Daruma doll representing the founder of Zen Buddhism" },
  { x: 445, y: 175, radius: 10, tip: '"At the end of the day I look for a place to sleep under the bright stars, waiting for a new awakening."' },
  { x: 507, y: 226, radius: 20, tip: "A small stone platform. It has a Yin-Yang symbol engraved" },
  { x: 844, y: 162, radius: 20, tip: "A mineral lodged in the rock. It's very bright!" },
  { x: 880, y: 228, radius: 20, tip: "It looks like a little sleeping buddha." },
  { x: 582, y: 459, radius: 20, tip: 'An old manuscript: "The first thing I do every day is appreciate the sunlight." The following pages are missing...' },
  { x: 178, y: 173, radius: 40, tip: '"Bottomless Development Well". It\'s scary ...'},
  { x: 276, y: 138, radius: 14, tip: "Into the well: Alba, Adriá, Christian, David, Íñigo, Ivan C, Ivan U, Jesús, Mark, Pablo, Raquel, Sara, Sergio, Víctor, Adrián" },
];
draw();
canvas6.addEventListener('mousemove', (e) => {
     handleMouseMove(e)
})
function draw() {
  for (var i = 0; i < hotspots.length; i++) {
    var h = hotspots[i];
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.radius, 0, Math.PI * 2)
    ctx.closePath();
    ctx.stroke();
  }
}
function handleMouseMove(e) {
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();
  mouseX = parseInt(e.clientX - offsetX)
  mouseY = parseInt(e.clientY - offsetY)
  ctx.clearRect(0, 0, cw, ch)
  draw()
  for (var i = 0; i < hotspots.length; i++) {
    var h = hotspots[i]
    var dx = mouseX - h.x
    var dy = mouseY - h.y
    if (dx * dx + dy * dy < h.radius * h.radius) {
      ctx.fillText(h.tip, canvas6.width/2, canvas6.height/1.02);
    }
  }
}


