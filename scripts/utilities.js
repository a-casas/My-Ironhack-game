

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
		player.stepSound()
		objectTest.draw()
		objectTest2.draw()
		objectTest3.draw()
		collision(player, objectTest)
		collision(player, objectTest2)
		collision(player, objectTest3)
		triggerOne(collidesArr)
		triggerTwo(player)
		spider(player)
	}
	
}

startAnimating(18)


// //Collide detection. If any of these statements is true there is not collision
function collision(obj1, obj2){
	if (obj1.x > obj2.x + obj2.width || obj1.x + obj1.width < obj2.x || obj1.y+obj1.height > obj2.y + obj2.height || obj1.y + obj1.height < obj2.y){
		
	} else {
		if (!collidesArr.includes(obj2.value)){
			collidesArr.push(obj2.value)
			if (collidesArr.length === 2)
				checkOrderForTwo(collidesArr)
			if (collidesArr.length === 3)
				checkOrder(collidesArr)
			}
		}
		// console.log(`collides with ${obj2.name}`)
		console.log(collidesArr)
	}

function checkOrderForTwo(arr){
	if (arr[0] < arr[1] && arr[1] != 90){
		return arr
	} else {
		arr.splice(0, arr.length)
	}
}

function checkOrder(arr){
	if (arr[0] < arr[1] && arr[1] < arr[2]){
		canvas7.style.visibility='visible'
		} else {
		collidesArr.splice(0, arr.length)
	   }
	}

const canvas7 = document.getElementById('canvas7')
const ctx7 = canvas5.getContext('2d')


function triggerOne(arr){
	if (arr.includes(90)){
		canvas8.style.visibility = 'visible'; 
	} else {
		canvas8.style.visibility='hidden'
	}
}

const canvas8 = document.getElementById('trigger')
const ctx8 = canvas8.getContext('2d')

function triggerTwo(character){
	if (character.x >= 130 && character.x <=160 && character.y == 110){
		canvas9.style.visibility = 'visible'; 
	} else {
		canvas9.style.visibility='hidden'
	}
}

const canvas9 = document.getElementById('trigger2')
const ctx9 = canvas9.getContext('2d')

function spider(character){
	if (character.x >= 455 && character.x <=520 && character.y >= 438){
		canvas10.style.visibility = 'visible'; 
	} else {
		canvas10.style.visibility='hidden'
	} 
}

const canvas10 = document.getElementById('spider')
const ctx10 = canvas10.getContext('2d')

