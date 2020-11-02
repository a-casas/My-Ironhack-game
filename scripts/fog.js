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
// // Create an array to store our particles
// var particles = [];
// // The amount of particles to render
// var particleCount = 60;
// // The maximum velocity in each direction
// var maxVelocity = 2;
// // The target frames per second (how often do we want to update / redraw the scene)
// var targetFPS = 33;
// // Set the dimensions of the canvas as variables so they can be used.
// var canvasWidth = window.innerWidth;
// var canvasHeight = window.innerHeight;
// // borders for particles on top and bottom
// var borderTop = 0.01 * canvasHeight;
// var borderBottom = 0.99 * canvasHeight;
// // Create an image object (only need one instance)
// var imageObj = new Image();
// // x position of scrolling image
// var imageX = 0;

// var looping = false;
// var totalSeconds = 0;
// // Once the image has been downloaded then set the image on all of the particles
// imageObj.onload = function() {
//   particles.forEach(function(particle) {
//     particle.setImage(imageObj);
//   });
// };
// // Once the callback is arranged then set the source of the image
// imageObj.src = "https://image.ibb.co/fdpeJF/Smoke.png";
// // A function to create a particle object.
// function Particle(context) {
//   // Set the initial x and y positions    
//   this.x = 0;
//   this.y = 0;
//   // Set the initial velocity
//   this.xVelocity = 0;
//   this.yVelocity = 0;
//   // Set the radius
//   this.radius = 5;
//   // Store the context which will be used to draw the particle
//   this.context = context;
//   // The function to draw the particle on the canvas.
//   this.draw = function() {
//     // If an image is set draw it
//     if (this.image) {
//       this.context.drawImage(this.image, this.x - 128, this.y - 128);
//       // If the image is being rendered do not draw the circle so break out of the draw function
//       return;
//     }
//     // Draw the circle as before, with the addition of using the position and the radius from this object.
//     this.context.beginPath();
//     this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//     this.context.fillStyle = "rgba(0, 255, 255, 1)";
//     this.context.fill();
//     this.context.closePath();
//   };
//   // Update the particle.
//   this.update = function() {
//     // Update the position of the particle with the addition of the velocity.
//     this.x += this.xVelocity;
//     this.y += this.yVelocity;
//     // Check if has crossed the right edge
//     if (this.x >= canvasWidth) {
//       this.xVelocity = -this.xVelocity;
//       this.x = canvasWidth;
//     }
//     // Check if has crossed the left edge
//     else if (this.x <= 0) {
//       this.xVelocity = -this.xVelocity;
//       this.x = 0;
//     }
//     // Check if has crossed the bottom edge
//     if (this.y >= borderBottom) {
//       this.yVelocity = -this.yVelocity;
//       this.y = borderBottom;
//     }
//     // Check if has crossed the top edge
//     else if (this.y <= borderTop) {
//       this.yVelocity = -this.yVelocity;
//       this.y = borderTop;
//     }
//   };
//   // A function to set the position of the particle.
//   this.setPosition = function(x, y) {
//     this.x = x;
//     this.y = y;
//   };
//   // Function to set the velocity.
//   this.setVelocity = function(x, y) {
//     this.xVelocity = x;
//     this.yVelocity = y;
//   };
//   this.setImage = function(image) {
//     this.image = image;
//   };
// }
// // A function to generate a random number between 2 values
// function generateRandom(min, max) {
//   return Math.random() * (max - min) + min;
// }
// // The canvas context if it is defined.
// var context;
// // Initialise the scene and set the context if possible
// function init() {
//   var canvas4 = document.getElementById('canvas4');
//   canvas4.width = 1000
//   canvas4.height = 500
//   if (canvas4.getContext) {
//     // Set the context variable so it can be re-used
//     context = canvas4.getContext('2d');
//     // Create the particles and set their initial positions and velocities
//     for (var i = 0; i < particleCount; ++i) {
//       var particle = new Particle(context);
//       // Set the position to be inside the canvas bounds
//       particle.setPosition(generateRandom(0, canvasWidth), generateRandom(borderTop, borderBottom));
//       // Set the initial velocity to be either random and either negative or positive
//       particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
//       particles.push(particle);
//       context.clearRect(0, 0, canvas4.width, canvas4.height);  
//     }
//   } else {
//     alert("Please use a modern browser");
//   }
// }
// // The function to draw the scene
// function draw() {
//   //  background image
//   context.globalAlpha = 1;
//   context.globalCompositeOperation = 'source-over';
//   // draw twice to cover wrap around
//   context.drawImage(backImg, imageX, 0, canvasWidth, canvasHeight);
//   context.drawImage(backImg, imageX + canvasWidth, 0, canvasWidth, canvasHeight);
//   //context.fillStyle = "rgba(255,255,255, .5)";
//   //context.fillRect(0, 0, canvasWidth, canvasHeight);

//   context.globalAlpha = 0.75;
//    context.globalCompositeOperation = 'soft-light';
//   // Fog layer
//   // Go through all of the particles and draw them.
//   particles.forEach(function(particle) {
//     particle.draw();
//   });

// }
// // Update the scene
// function update() {
//   // incrementally change image position of background to scroll left
//   imageX -= maxVelocity;

//   if (imageX < -canvasWidth) {
//     imageX += canvasWidth;
//   }

//   particles.forEach(function(particle) {
//     particle.update();
//   });
// }
// // Initialize the scene
// init();
// backImg = new Image();
//                                                         backImg.src = '..//images/fog3.png';
// // If the context is set then we can draw the scene (if not then the browser does not support canvas)
// if (context) {
//   setInterval(function() {
//     // Update the scene befoe drawing
//     update();
//     // Draw the scene
//     draw();
//   }, 1000 / targetFPS);
// }