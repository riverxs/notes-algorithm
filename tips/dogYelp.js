// dogYelp.js

function Dog() {
	this.wow = function() {
		console.log('wow')
	}
	this.yelp = function() {
		this.wow()
	}
}

function MadDog() {
	this.yelp = function() {
		setInterval(()=>{
			this.wow()
		}, 500)
	}
}
MadDog.prototype = new Dog()

let dog = new Dog()
dog.yelp()

let madDog = new MadDog()

madDog.yelp()

