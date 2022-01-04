noseX="";
noseY="";
function preload(){
    clown_nose=
    loadImage("https://i.postimg.cc/Z5d8HhZ0/creeperface.png");
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Coords of nose are"+noseX+","+noseY);
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
    console.log(results);
    noseX=results[0].pose.nose.x-14;
    noseY=results[0].pose.nose.y;
}
}
function draw(){
    image(video,0,0,300,300);

    image(clown_nose,noseX-20,noseY-80,100,100);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY,20);
}
function take_snapshot(){
    save("Creeperyou.png");
}