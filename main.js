var status1 = false;

function setup() {
    canvas = createCanvas(380, 425);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 425);
    video.hide()
}

function draw() {
    image(video, 0, 0, 700, 420);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = " Detecting Objects";
}

 function modelLoaded(){
     console.log("Model Loaded!!")
     status1 = true;
     vid.loop();
     vid.speed(1);
     vid.volume(5);
 }
