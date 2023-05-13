diffrence=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(600,600);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function draw()
{
    background("#6699ff");
    textSize(diffrence);
    fill('#FFE787');
    text('Sharv',50,400);
}
function modelloaded()
{
    console.log("poseNet");
}
function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);
    }
}