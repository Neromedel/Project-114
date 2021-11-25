function preload() {

}

function setup() {
    canvas = createCanvas(650, 650);
    canvas.position(400, 400);
    video = createCapture(VIDEO);
    video.hide();


}


function draw() {
    image(video, 200, 200, 150, 150);

    fill(0, 255, 255)
    stroke(0, 155, 246)
    circle(220, 220, 70)

    fill(0, 255, 255)
    stroke(0, 155, 246)
    circle(325, 220, 70)

    fill(0, 255, 255)
    stroke(0, 155, 246)
    circle(325, 325, 70)

    fill(0, 255, 255)
    stroke(0, 155, 246)
    circle(220, 325, 70)



}

function take_snapshot() {
    save('ChillBlade.png');
}
