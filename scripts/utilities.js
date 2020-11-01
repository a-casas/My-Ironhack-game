

//Player movement using keystrokes. Tracking into keys array
window.addEventListener('keydown', function(e){
	keys[e.keyCode] = true //Adding that key to the keys array
	if (keys[87] || keys[83] || keys[65] || keys[39]){
		player.moving = true
	}	
})

window.addEventListener('keyup', function(e){
	delete keys[e.keyCode] //Clean the keys array
	player.moving = false
})

let fps, fpsInterval, startTime, now, then, elapsed

function startAnimating(fps) {
	fpsInterval = 1000/fps
	then = Date.now()
	startTime = then
	animate()
}

function animate(){
	requestAnimationFrame(animate)
	now = Date.now()
	elapsed = now - then
	if (elapsed > fpsInterval){
		then = now - (elapsed % fpsInterval)
		ctx3.clearRect(0, 0, canvas.width, canvas.height)
		player.drawSize()
		player.update()
		player.walk()
		objectTest.draw()
		//collision(player, buda)	
	}
	
	
	
}

startAnimating(18)


// //Collide detection. If any of these statements is true there is not collision
function collision(obj1, obj2){
	if (obj1.x > obj2.x + obj2.width || obj1.x + obj1.width < obj2.x || obj1.y > obj2.y + obj2.height || obj1.y + obj1.height < obj2.y){
		
		console.log('not collides!')
	} else {
		console.log('collides')
	}	
}

// function avoidCollision(){
// if (collision(player, buda)){
// player.moving = false
// }
// }
// avoidCollision()
// function boundingBoxCollide(object1, object2) {
//     var left1 = object1.x;
//     var left2 = object2.x;
//     var right1 = object1.x + object1.width;
//     var right2 = object2.x + object2.width;
//     var top1 = object1.y;
//     var top2 = object2.y;
//     var bottom1 = object1.y + object1.height;
//     var bottom2 = object2.y + object2.height;

//     if (bottom1 < top2) return(false);
//     if (top1 > bottom2) return(false);

//     if (right1 < left2) return(false);
//     if (left1 > right2) return(false);

//     return(true);

// }

