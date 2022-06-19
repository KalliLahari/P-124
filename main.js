function setup(){
video=createCapture(VIDEO);
video.size(500,600);
video.position(150,180);
canvas=createCanvas(500,500);
canvas.position(720,231);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);

}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background("lightyellow");
}
