Status = "";
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
      objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML = "Status: Detecting Objects";
object_name = document.getElementById('input').value; 
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true; 
}

function draw(){
    image(video, 0, 0, 600, 500);
}