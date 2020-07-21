//Create variables here
var dog1, happyDog, database, foodS, foodStock

var database

function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,10,10)
  dog.scale = 0.25
  dog.addImage(dog1)

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

}


function draw() {  

  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here
  textSize(40)
  fill("blue")
  stroke("aqua")
  text("Food:"+ foodS,200,100)

  textSize(20)
  fill("red")
  text("Feed dog by pressing up arrow",50,150)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  } else{
    x = x-1
  }

  database.ref('/').update({
    Food:x
  })
}



