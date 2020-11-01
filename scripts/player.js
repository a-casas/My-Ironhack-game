  
class Player {
	constructor(){
		this.spriteWidth = 180
		this.spriteHeight = 252
		this.width = this.spriteWidth/2
		this.height = this.spriteHeight/2
		this.x = 500
		this.y = 280
		this.moving = false
		this.frameX = 0
		this.frameY = 0
		this.speed = 5
		this.image = new Image()
		this.image.src = "../images/characters/hulk.png"
	}

	update(){
		//console.log('update')
		if (keys[87] && this.y > 110){ //W up
			this.y -= this.speed
			this.frameY = 3
			this.moving = true //Ensure the sprite loop. Removes freezes
			this.up = true
		}
		if (keys[65] && this.x > 177 - this.width/2){ //A left
			this.x -= this.speed
			this.frameY = 1
			this.moving = true
			this.left = true
		}
		if (keys[83] && this.y < canvas.height - this.height/2){ //S down
			this.y += this.speed
			this.frameY = 0
			this.moving = true
			this.down = true
		}
		if (keys[68] && this.x < 890 - this.width/2){ //D right
			this.x += this.speed
			this.frameY = 2
			this.moving = true
			this.right = true
		}
	}
	
	
	drawSize(){  //Zoom based on y position
		ctx3.fillStyle = 'red'
		//ctx3.fillRect(this.x, this.y, this.width, this.height) //to test sprite alignment VS rectangle alignment
		
		if (this.y > 295 && this.y <= 330) {
			ctx3.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x-13, this.y-30, 1.25*this.width+this.y/500, 1.25*this.height+this.y/500 )
		} else if (this.y > 330) {
			ctx3.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x-24, this.y-60, 1.5*this.width+this.y/500, 1.5*this.height+this.y/500 )
		} else if (this.y < 210 && this.y >= 150) {
			ctx3.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x+10, this.y+20, 0.80*this.width+this.y/500, 0.80*this.height+this.y/500 )
		} else if (this.y < 150) {
			ctx3.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x+15, this.y+40, 0.65*this.width+this.y/500, 0.65*this.height+this.y/500 )
		} else {
			ctx3.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height )
		}
	}

	walk(){ //loop through player sprites
		if (this.frameX < 3 && this.moving) this.frameX++
		else this.frameX = 0
	}


}

const player = new Player()




