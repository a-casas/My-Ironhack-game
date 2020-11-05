

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
const objectTest = new GameObject(150, 300, 60, 80, "xObject", "./images/emptyobjt.png", 30)
const objectTest2 = new GameObject(800, 200, 50, 70, "yObject", "./images/emptyobjt.png", 60)
const objectTest3 = new GameObject(480, 200, 40, 50, "zObject", "./images/emptyobjt.png", 90)







