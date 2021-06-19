const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var score = 0;
var backgroundImg
function preload(){
    getBackgroundImg()
}
function setup() {
var canvas = createCanvas(1000,500)
   engine = Engine.create()
    world = engine.world

    ground = new Ground(500,480,1000,15)

    ball = new Polygon(200,300,20)

    stand1 = new Ground(500,400,200,10)
    stand2 = new Ground(850,200,150,10)

    sling = new Sling(ball.body,{x:200,y:350})
    
    box1 = new Box(425,390,25,25);
    box2 = new Box(450,390,25,25);
    box3 = new Box(475,390,25,25)
    box4 = new Box(500,390,25,25)
    box5 = new Box(525,390,25,25)
    box6 = new Box(550,390,25,25)
    box7 = new Box(575,390,25,25)

    box8 = new Box(437.5,370,25,25)
    box9 = new Box(462.5,370,25,25)
    box10 = new Box(487.5,370,25,25)
    box11 = new Box(512.5,370,25,25)
    box12 = new Box(537.5,370,25,25)
    box13 = new Box(562.5,370,25,25)

    box14 = new Box(450,340,25,25)
    box15 = new Box(475,340,25,25)
    box16 = new Box(500,340,25,25)
    box17 = new Box(525,340,25,25)
    box18 = new Box(550,340,25,25)

    box19 = new Box(462.5,310,25,25);
    box20 = new Box(487.5,310,25,25);
    box21 = new Box(512.5,310,25,25);
    box22 = new Box(537.5,310,25,25);

    box23 = new Box(475,280,25,25);
    box24 = new Box(500,280,25,25);
    box25 = new Box(525,280,25,25);

    box26 = new Box(487.5,250,25,25);
    box27 = new Box(512.5,250,25,25);

    box28 = new Box(500,220,25,25);


    box29 = new Box(800,190,25,25)
    box30 = new Box(825,190,25,25)
    box31 = new Box(850,190,25,25)
    box32 = new Box(875,190,25,25)
    box33 = new Box(900,190,25,25)

    box34 = new Box(812.5,160,25,25)
    box35 = new Box(837.5,160,25,25)
    box36 = new Box(862.5,160,25,25)
    box37 = new Box(887.5,160,25,25)

    box38 = new Box(825,120,25,25)
    box39 = new Box(850,120,25,25)
    box40 = new Box(875,120,25,25);
    
    box41 = new Box(837.5,95,25,25);
    box42 = new Box(862.5,95,25,25);
    
    box43= new Box(850,70,25,25);
    
    

    

    
}

function draw() {
    if(backgroundImg)
background(backgroundImg)
    
Engine.update(engine);
textSize(20)
fill("brown")
text("Score: " + score,750,40)

ground.display();

ball.display();

sling.display();

stand1.display();
stand2.display();

fill("cyan")
box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();

fill("violet")
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();

fill("grey")
box14.display();
box14.score();
box15.display();
box15.score();
box16.display();
box16.score();
box17.display();
box17.score();
box18.display();
box18.score();

fill(210)
box19.display();
box19.score();
box20.display();
box20.score();
box21.display();
box21.score();
box22.display();
box22.score();

fill("green")
box23.display();
box23.score();
box24.display();
box24.score();
box25.display();
box25.score();

fill("red")
box26.display();
box26.score();
box27.display();
box27.score();

fill("orange")
box28.display();
box28.score();

box29.display();
box29.score();
box30.display();
box30.score();
box31.display();
box31.score();
box32.display();
box32.score();
box33.display();
box33.score();

fill("red")
box34.display();
box34.score();
box35.display();
box35.score();
box36.display();
box36.score();
box37.display();
box37.score();

fill("green")
box38.display();
box38.score();
box39.display();
box39.score();
box40.display();
box40.score();

fill("cyan")
box41.display();
box41.score();
box42.display();
box42.score();

fill("violet")
box43.display();
box43.score();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX ,y:mouseY})
}

function mouseReleased() {
    sling.fly()
}

function keyPressed() {
    if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:200,y:300})
    sling.attach(ball.body)
    }
}
async function getBackgroundImg(){
    
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON)
    var datetime = responseJSON.datetime;
    console.log(datetime)
    var hour = datetime.slice(11,13);
    console.log(hour)
    if(hour>=06 && hour<=19){
        backgroundImg = "cyan";
    }
    else{
        backgroundImg = "grey";
    }

    //backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}