  


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



class GameObject {
	constructor(x, y, width, height, name, picture, value){
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.name = name
		this.image = new Image()
		this.image.src = picture
		this.value = value
	}
	draw(){
		ctx2.fillStyle = 'green'
		//ctx2.fillRect(this.x, this.y, this.width, this.height, this.name, this.image, this.picture) //to test sprite alignment VS rectangle alignment
		ctx2.drawImage(this.image, this.x, this.y, this.width, this.height)
	}
}
const objectTest = new GameObject(150, 300, 60, 80, "xObject", "../images/emptyobjt.png", 30)
const objectTest2 = new GameObject(800, 200, 50, 70, "yObject", "../images/emptyobjt.png", 60)
const objectTest3 = new GameObject(480, 200, 40, 50, "zObject", "../images/emptyobjt.png", 90)







