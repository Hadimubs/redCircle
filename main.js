nosex=0;
nosey=0;
function setup(){
canvas=createCanvas(400,400);
canvas.center();
v=createCapture(VIDEO);
v.hide();
m=ml5.poseNet(v,modelLoaded);
m.on('pose',gotPose);
}

function modelLoaded(){
console.log("model is Loaded");

}

function gotPose(results){
console.log(results)
nosex=results[0].pose.nose.x-125;
nosey=results[0].pose.nose.y-50;
}

function draw(){
image(v,0,0,400,400);
fill("red");
stroke("black");
circle(nosex,nosey,30);
}