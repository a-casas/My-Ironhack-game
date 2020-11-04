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
  { x: 965, y: 302, radius: 25, tip: 'Why are those headphones so familiar to me? Who knows... ¯\\_(ツ)_/¯' },
  { x: 73, y: 169, radius: 25, tip: 'Noh masks. With that I can scare away the evil spirits... if I meet one.' },
  { x: 421, y: 108, radius: 20, tip: 'I\'ve always wondered how they could fight with the sashimono on their back.' },
  { x: 389, y: 155, radius: 25, tip: 'The old armor of a samurai. maybe it could be useful to me .. if I weren\'t a green giant' },
  { x: 619, y: 143, radius: 35, tip: 'A traditional screen .. it\'s nice, but it\'s broken and wet.' },
  { x: 609, y: 204, radius: 25, tip: 'There is accumulated water in this area' },
  { x: 143, y: 234, radius: 25, tip: 'A ray of sunlight bounces from that mirror to the ground' },
  { x: 27, y: 202, radius: 35, tip: '"Family is forever" When did I learn Japanese?' },
  { x: 846, y: 227, radius: 25, tip: 'Light does not reach this area. It\'s dark.' },
  { x: 426, y: 458, radius: 25, tip: 'It\'s a skull with a label: "He tried to finish the first Ironhack project on time"' },
  { x: 728, y: 188, radius: 30, tip: 'Javi\'s diving gear. Do not touch!' },
  { x: 507, y: 141, radius: 40, tip: "A small ray of light filters through the rock, illuminating an old stone balanced buddha." },
  { x: 734, y: 458, radius: 25, tip: "It\'s a small stone pagoda. Looks very old." },
  { x: 421, y: 172, radius: 8, tip: "It\'s a wooden Daruma doll representing the founder of Zen Buddhism" },
  { x: 465, y: 175, radius: 9, tip: 'A page fragment: "..ght. When night falls, find a place under the bright stars and capture the energy of the universe"' },
  { x: 507, y: 226, radius: 20, tip: "A small stone platform. It has a Yin-Yang symbol engraved" },
  { x: 844, y: 162, radius: 20, tip: "The mineral is lodged in the rock. Despite the dark, it's very bright and seems to emit its own light." },
  { x: 885, y: 228, radius: 15, tip: "It looks like a little sleeping buddha." },
  { x: 580, y: 107, radius: 18, tip: 'Engraved on the rock: "The key to inner awakening is to channel your energies, find balance and get your life back."' },
  { x: 582, y: 459, radius: 20, tip: 'The diary of a wise old man: "Even chaos follows an ORDER that you do not understand" The following pages are missing.' },
  { x: 970, y: 472, radius: 24, tip: '"To face life challenges you should get energy from any source. First, during the day, through sunli.." The page is torn'},
  { x: 190, y: 173, radius: 30, tip: '"Development Bottomless Well". It\'s scary ...'},
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
    ctx.stroke();   //to check circles placement
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


