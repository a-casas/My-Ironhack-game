  


// class Object {
// 	constructor(x, y, width, height, name, picture)
// 	this.x = x
// 	this.y = y
// 	this.width = width
// 	this.height = height
// 	this.name = name
// 	this.image = new Image()
// 	this.image.src = picture
// }

// draw(){
// 	ctx3.fillStyle = 'blue'
// 	ctx3.fillRect(this.x, this.y, this.width, this.height, this.name, this.image, this.picture)
// }


// function initObjects(){
// 	objectsArr.push(new Object(250, 250, 100, 200, 'vase', "../images/vase.png"))
// 	draw()

// }

// initObjects()

// class Object {
// 	constructor(_x, _y, _width, _height, _image, _name) {
// 		this.x = 200
// 		this.y = 280
// 		this.width = 100
// 		this.height = 100
// 		this.image = new Image()
// 		this.image.src = image
// 		this.name = name
// 	}
	
	
// 	drawObject(){  
// 		ctx2.fillStyle = 'blue'
// 		ctx2.fillRect(this.x, this.y, this.width, this.height) //to test sprite alignment VS rectangle alignment
// 		ctx2.drawImage(this.image, this.x, this.y, this.width, this.height )
// 	}

// }

// class BudaPuzzle extends Object{
// 	constructor(_x, _y, _width, _height, _image, _name) {
// 	super(_x, _y, _width, _height, _image, _name)
// 	}

// 	drawBuda(){  
// 		ctx2.fillStyle = 'blue'
// 		ctx2.fillRect(this.x, this.y, this.width, this.height) //to test sprite alignment VS rectangle alignment
// 		ctx2.drawImage(this.image, this.x, this.y, this.width, this.height )
// 	}
// }

// const object = new Object()
// const budaPuzzle = new BudaPuzzle(300, 200, 100, 100, '../images/vase.png', "Buda puzzle box")




// class FogBackground {
// 	constructor() {
// 		this.x = 0 
// 		this.y = 0
// 		this.width = 1000
// 		this.height = 500
// 		this.image = new Image()
// 		this.img.src = "../images/fog.png"	
// 	}
	
//     renderFog(){
// 		ctx3.fillStyle = 'red'
// 		ctx3.drawImage(this.image, this.width, this.height)
		
//     //     if(x <= -499){
//     //         x = 0;
//     //     }
//     // }
// }




class GameObject {
	constructor(x, y, width, height, name, picture){
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.name = name
		this.image = new Image()
		this.image.src = picture
	}
	draw(){
		ctx2.fillStyle = 'blue'
		ctx2.fillRect(this.x, this.y, this.width, this.height, this.name, this.image, this.picture)
		ctx2.drawImage(this.image, this.x, this.y, this.width, this.height)
	}
}
const objectTest = new GameObject(222, 222, 100, 100, "vase", "../images/vase.png")
const objectTest2 = new GameObject(130, 225, 100, 100, "vase2", "../images/vase.png")







