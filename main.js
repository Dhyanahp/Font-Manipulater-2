noseX=0;
noseY=0;
diffrenece = 0;
rightWrist = 0;
leftWrist = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(400, 400);
    canvas.position(560, 103)
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) 
{
    if(results.length >0 ) {
      console.log(results) ; 
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " +noseX +" noseY " + noseY);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference =floor( leftWristX - rightWrist);
      
      console.log("leftWristX = " + leftWristX + "rightWrist = "+ rightWrist + "difference ="+ difference);
    }
}
function draw() {
    background('lightblue');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('black');
    stroke('black');
    square(noseX, noseY, difference);
}