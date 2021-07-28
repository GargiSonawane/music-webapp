song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0; 
song1_status = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;
song2_status = "";

function preload(){
    song1 = loadSound("astronaut in the ocean.mp3");
    song2 = loadSound("gangstas paradise.mp3");
    
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide;

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model loaded");
}

function draw(){
    Image(video, 0, 0, 600, 500);
    song1_status = song1.isPlaying();
    fill('#f54260');
    stroke('#f542e9');
    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1_status = false){
            song1.play();
            document.getElementById.("SongName").innerHTML = Song1;
        }
    }
    song2_status = song2.isPlaying();
    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        song1.stop();
        if(song2_status = false){
            song2.play();
            document.getElementById.("SongName").innerHTML = Song2;
        }
    }
    
}

function play(){
    song.play();
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        scoreLeftWrist = results[0].pose.keypoints[10].score
        console.log("ScoreLeftWrist = " + scoreLeftWrist + "ScoreRightWrist = " + scoreRightWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX =" + rightWristX + " rightWristY =" + rightWristY);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreLeftWrist = results[0].pose.keypoints[10].score
        console.log("ScoreLeftWrist = " + scoreLeftWrist + "ScoreRightWrist = " + scoreRightWrist);
    }
}