leftWristX = 0;
rightWristX = 0;
difference = 50;

function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(550,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose'. gotPoses);

  
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill(50);
    text('Precious', 50, 400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
        document.getElementById('square_side').innerHTML = 'font size of the text will be' + difference;
    }
}