

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
		objectTest2.draw()
		objectTest3.draw()
		collision(player, objectTest)
		collision(player, objectTest2)
		collision(player, objectTest3)
		// fog.renderFog()	
	}
	
	
	
}

startAnimating(18)


// //Collide detection. If any of these statements is true there is not collision
function collision(obj1, obj2){
	if (obj1.x > obj2.x + obj2.width || obj1.x + obj1.width < obj2.x || obj1.y+obj1.height > obj2.y + obj2.height || obj1.y + obj1.height < obj2.y){
		
		
	} else {
		
		if (!collidesArr.includes(obj2.value)){
			collidesArr.push(obj2.value)
			if (collidesArr.length === 3){
				checkOrder(collidesArr)	
			}
		}
		// console.log(`collides with ${obj2.name}`)
		console.log(collidesArr)
	}	
}
function checkOrder(arr){
	if (arr[0] < arr[1] && arr[1] < arr[2]){
		canvas7.style.visibility='visible'
		} else {
		collidesArr.splice(0, arr.length)
	   }
	}
// function resetCollidesArr(){
// 	collidesArr = []
// }
// function drawEnd(){
// 	ctx7.drawImage(endImage, canvas7.width, canvas7.height)
// }

const canvas7 = document.getElementById('canvas7')
const ctx7 = canvas5.getContext('2d')
// canvas7.width = 1000
// canvas7.height = 500	
// const endImage = new Image()
// endImage.src = '../images/background.png'




// const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);
// const checkIfSorted = isSorted(collidesArr)

// function winOrReset(arr, param){
// 	if (param == true) {
// 		console.log('you win')
		
// 	} else {
// 		arr = [] //hacer reset de collides arr
		
// 	}
// }

// //console.log(checkIfSorted)
// winOrReset(collidesArr, checkIfSorted)





// function checkOrder(arr){
// 	if (arr[0] > arr[1] && arr[1] > arr[2]){
// 	console.log("you win")
// }
// }

// checkOrder(collidesArr)

// function onlyUnique(value, index, self) {
// 	return self.indexOf(value) === index;
//   }
                                         
//   // usage example:
// //   var a = ['a', 1, 'a', 2, '1'];
//   let unique = collidesArr.filter(onlyUnique);
  
//   console.log(unique); // ['a', 1, 2, '1']





// function getUniqueCollisions(arr){
	
	
// 	// Loop through array values
// 	for(i=0; i < arr.length; i++){
// 		if(arr.indexOf(arr[i]) === -1) {
// 			arr.push(arr[i])
// 		}
// 	}
// 	return arr
// }
// getUniqueCollisions(uniqueCollisionsArr)

// for (let i in uniqueCollisionsArr){
//     let list = str[i].split(',').map(Number);
//     console.log(list);
//     let isSorted = true;
//     for(var j = 0 ; j < list.length - 1 ; j++){
//         if(list[j] > list[j+1]) {
//             isSorted = false
//             break
//         }
//     }
//     console.log(isSorted);
// }

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


